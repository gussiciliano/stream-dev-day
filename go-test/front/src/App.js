
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Libros from "./pages/Libros";
import NewLibro from "./pages/NewLibro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/new" element={<NewLibro />} />
      </Routes>
    </Router>
  );
}

export default App;
