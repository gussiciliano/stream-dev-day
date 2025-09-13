package main

import (
    "database/sql"
    _ "github.com/lib/pq"
    "os"
    "fmt"
)

func conectarDB() (*sql.DB, error) {
    host := os.Getenv("DB_HOST")
    port := os.Getenv("DB_PORT")
    user := os.Getenv("DB_USER")
    password := os.Getenv("DB_PASSWORD")
    dbname := os.Getenv("DB_NAME")
    
    connStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
    return sql.Open("postgres", connStr)
}
