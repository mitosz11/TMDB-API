export default async function getAllMovies(page) {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${page}`
  );
  return response.json();
}
