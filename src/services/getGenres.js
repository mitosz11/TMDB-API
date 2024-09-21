export default async function getGenres() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en`
  );
  return response.json().genres;
}
