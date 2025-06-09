import { Link } from "react-router-dom";

function HeroCard({ hero }) {
  return (
    <div className="card">
      <img src={hero.images.sm} alt={hero.name} />
      <h3>{hero.name}</h3>
      <p>{hero.biography.fullName}</p>
      <Link to={`/hero/${hero.id}`}>Ver más</Link>
    </div>
  );
}

export default HeroCard;

