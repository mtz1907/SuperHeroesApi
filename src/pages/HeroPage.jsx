import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function HeroPage() {
const { id } = useParams();
const [hero, setHero] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
.then((res) => res.json())
.then((data) => {
setHero(data);
setLoading(false);
})
.catch((err) => {
console.error("Error al cargar el héroe:", err);
setLoading(false);
});
}, [id]);

if (loading) return <p style={{ textAlign: "center" }}>Cargando héroe...</p>;
if (!hero) return <p style={{ textAlign: "center" }}>Héroe no encontrado.</p>;

return (
<div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
<h2 style={{ textAlign: "center" }}>{hero.name}</h2>
<img
src={hero.images.lg}
alt={hero.name}
style={{ width: "100%", maxWidth: "300px", display: "block", margin: "1rem auto" }}
/>
<p><strong>Nombre completo:</strong> {hero.biography.fullName}</p>
<p><strong>Editorial:</strong> {hero.biography.publisher}</p>
<p><strong>Primera aparición:</strong> {hero.biography.firstAppearance}</p>
<p><strong>Ocupación:</strong> {hero.work.occupation}</p>
<p><strong>Altura:</strong> {hero.appearance.height.join(" / ")}</p>
<p><strong>Peso:</strong> {hero.appearance.weight.join(" / ")}</p>
<h4 style={{ marginTop: "1rem" }}>Poderes:</h4>
<ul>
{Object.entries(hero.powerstats).map(([key, value]) => (
<li key={key}>
{key.charAt(0).toUpperCase() + key.slice(1)}: {value}
</li>
))}
</ul>
</div>
);
}

export default HeroPage;