export default async function getGenres() {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=f8a55d771e063cd8c9ff6b1639bdddee&language=en"
  );
  return response.json().genres;
}




