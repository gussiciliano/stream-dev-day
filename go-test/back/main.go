package main

import (
	"log"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	db, err := conectarDB()
	if err != nil {
		log.Fatalf("Error conectando a la base de datos: %v", err)
	}
	defer db.Close()

	r := gin.Default()
	r.Use(cors.Default())

	// Endpoint de prueba
	r.GET("/hello", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "Hola desde la API!"})
	})

	// Listar libros
	r.GET("/libros", func(c *gin.Context) {
		rows, err := db.Query("SELECT id, titulo, autor, publicado FROM libros")
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		defer rows.Close()
		var libros []Libro
		for rows.Next() {
			var l Libro
			var publicado time.Time
			err := rows.Scan(&l.ID, &l.Titulo, &l.Autor, &publicado)
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
			l.Publicado = publicado
			libros = append(libros, l)
		}
		c.JSON(200, libros)
	})

	// Crear libro
	r.POST("/libros", func(c *gin.Context) {
		var l Libro
		if err := c.ShouldBindJSON(&l); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		err := db.QueryRow(
			"INSERT INTO libros (titulo, autor, publicado) VALUES ($1, $2, $3) RETURNING id",
			l.Titulo, l.Autor, l.Publicado,
		).Scan(&l.ID)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		c.JSON(201, l)
	})

	// Obtener libro por ID
	r.GET("/libros/:id", func(c *gin.Context) {
		id := c.Param("id")
		var l Libro
		var publicado time.Time
		err := db.QueryRow("SELECT id, titulo, autor, publicado FROM libros WHERE id = $1", id).Scan(&l.ID, &l.Titulo, &l.Autor, &publicado)
		if err != nil {
			c.JSON(http.StatusNotFound, gin.H{"error": "Libro no encontrado"})
			return
		}
		l.Publicado = publicado
		c.JSON(200, l)
	})

	// Actualizar libro
	r.PUT("/libros/:id", func(c *gin.Context) {
		id := c.Param("id")
		var l Libro
		if err := c.ShouldBindJSON(&l); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		res, err := db.Exec("UPDATE libros SET titulo=$1, autor=$2, publicado=$3 WHERE id=$4", l.Titulo, l.Autor, l.Publicado, id)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		count, _ := res.RowsAffected()
		if count == 0 {
			c.JSON(http.StatusNotFound, gin.H{"error": "Libro no encontrado"})
			return
		}
		c.JSON(200, gin.H{"message": "Libro actualizado"})
	})

	// Eliminar libro
	r.DELETE("/libros/:id", func(c *gin.Context) {
		id := c.Param("id")
		res, err := db.Exec("DELETE FROM libros WHERE id=$1", id)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		count, _ := res.RowsAffected()
		if count == 0 {
			c.JSON(http.StatusNotFound, gin.H{"error": "Libro no encontrado"})
			return
		}
		c.JSON(200, gin.H{"message": "Libro eliminado"})
	})

	r.Run()
}
