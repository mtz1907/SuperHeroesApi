const API_URL = 'https://akabab.github.io/superhero-api/api/all.json';

export async function fetchHeroes() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error al obtener los héroes");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
