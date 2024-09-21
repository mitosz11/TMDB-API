import genres from "../constans/genres";

export default function genreNameArray(arr) {
  function genreName(id) {
    const foundGenre = genres.find((genre) => genre.id === id);
    return foundGenre.name;
  }
  return arr.map((id) => genreName(id));
}
