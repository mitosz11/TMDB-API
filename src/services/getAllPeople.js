export default async function getAllMovies(page) {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const response = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&page=${page}`
  );
  return response.json();
}

export async function searchPeople(query, page = 1) {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const response = await fetch(
    `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${query}&page=${page}`
  );
  return response.json();
}