export default async function getAllMovies(page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=f8a55d771e063cd8c9ff6b1639bdddee&page=${page}`
  );
  return response.json();
}
