export default async function getAllTvShow(page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=f8a55d771e063cd8c9ff6b1639bdddee&page=${page}`
  );
  return response.json();
}
