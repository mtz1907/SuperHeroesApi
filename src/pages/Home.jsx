import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchHeroes } from "../services/api";

function Home() {
  const [heroes, setHeroes] = useState([]);
  const [searchId, setSearchId] = useState("");
  const navigate = useNavigate();

  const loadHeroes = async () =>{
    const data = await fetchHeroes();
    setHeroes(data)
  }

  useEffect(() => {
    loadHeroes()
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchId.trim()) {
      navigate(`/hero/${searchId}`);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ marginBottom: "20px" }}>Superhéroes</h1>

      {/* Buscador por ID */}
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="number"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Buscar por ID"
          style={{ padding: "8px", marginRight: "10px", width: "150px" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>Buscar</button>
      </form>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {heroes.map((hero) => (
          <div
            key={hero.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "150px",
              textAlign: "center",
            }}
          >
            <img
              src={hero.images.sm}
              alt={hero.name}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <h3 style={{ fontSize: "14px" }}>{hero.name}</h3>
            <p style={{ fontSize: "12px", marginBottom: "8px" }}>{hero.biography.fullName}</p>
            <button
              onClick={() => navigate(`/hero/${hero.id}`)}
              style={{ padding: "4px 8px", fontSize: "12px" }}
            >
              Ver más
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;


