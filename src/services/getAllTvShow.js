export default async function getAllTvShow(page) {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&page=${page}`
  );
  return response.json();
}

export async function searchTvShows(query, page = 1) {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const response = await fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}&page=${page}`
  );
  return response.json();
}