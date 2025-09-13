
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

const API_URL = "http://localhost:8080/libros";

function Home() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!titulo || !autor) return;
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, autor })
    });
    if (res.ok) {
      setMsg("Libro agregado!");
      setTitulo("");
      setAutor("");
      setTimeout(() => navigate("/libros"), 700);
    } else {
      setMsg("Error al agregar libro");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h2>Alta de Libros</h2>
      <form onSubmit={handleAdd} style={{ marginBottom: "1rem" }}>
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

function Libros() {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLibros();
  }, []);

  const fetchLibros = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setLibros(data);
    } catch (err) {
      setLibros([]);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h2>Listado de Libros</h2>
      <Link to="/">Alta de libro</Link>
      {loading ? <p>Cargando...</p> : (
        <table border="1" cellPadding="8" style={{ marginTop: 16, width: "100%" }}>
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/libros" element={<Libros />} />
      </Routes>
    </Router>
  );
}

export default App;
