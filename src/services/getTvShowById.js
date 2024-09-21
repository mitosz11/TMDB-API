export default async function getTvShowById(showId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${showId}?api_key=f8a55d771e063cd8c9ff6b1639bdddee`
  );
  return response.json();
}
