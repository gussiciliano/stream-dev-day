import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ maxWidth: 500, margin: "4rem auto", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>Hola, te doy la bienvenida a la prueba de co pilot con libros</h1>
  <Link to="/libros" style={{ display: "block", marginTop: 32 }}>Ver libros</Link>
  <Link to="/new" style={{ display: "block", marginTop: 16 }}>Agregar libro</Link>
    </div>
  );
}
