export default async function getAllTvShow(page) {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&page=${page}`
  );
  return response.json();
}
