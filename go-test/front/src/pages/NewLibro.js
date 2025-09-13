import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function NewLibro() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titulo || !autor) return;
    const res = await fetch("http://localhost:8080/libros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, autor })
    });
    if (res.ok) {
      setMsg("Libro agregado!");
      setTimeout(() => navigate("/libros"), 700);
    } else {
      setMsg("Error al agregar libro");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "4rem auto", fontFamily: "sans-serif" }}>
      <h2>Nuevo Libro</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <input
          type="text"
          placeholder="Autor"
          value={autor}
          onChange={e => setAutor(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <button type="submit">Agregar</button>
      </form>
      {msg && <p>{msg}</p>}
      <Link to="/libros">Ver libros</Link>
    </div>
  );
}
