import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Libros() {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/libros")
      .then(res => res.json())
      .then(data => {
        setLibros(data);
        setLoading(false);
      })
      .catch(() => {
        setLibros([]);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ maxWidth: 700, margin: "4rem auto", fontFamily: "sans-serif" }}>
      <h2>Listado de Libros</h2>
  <Link to="/">Volver al inicio</Link>
  <Link to="/new" style={{ marginLeft: 16 }}>Agregar libro</Link>
      {loading ? <p>Cargando...</p> : (
        <table border="1" cellPadding="8" style={{ marginTop: 24, width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Autor</th>
            </tr>
          </thead>
          <tbody>
            {libros.map(libro => (
              <tr key={libro.id}>
                <td>{libro.id}</td>
                <td>{libro.titulo}</td>
                <td>{libro.autor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
