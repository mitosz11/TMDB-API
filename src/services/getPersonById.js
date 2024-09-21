export default async function getPersonById(personId) {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}`
  );
  return response.json();
}
