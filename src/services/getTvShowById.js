export default async function getTvShowById(showId) {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${showId}?api_key=${apiKey}`
  );
  return response.json();
}
