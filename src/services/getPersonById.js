export default async function getPersonById(personId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${personId}?api_key=f8a55d771e063cd8c9ff6b1639bdddee`
  );
  return response.json();
}
