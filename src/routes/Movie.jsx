import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getMovieById from "../services/getMovieById";
import SelectedMovie from "../components/SelectedMovie";

export default function Movie() {

    const { id } = useParams()
    const [movie, setMovie] = useState([]);

useEffect(
  () =>
    async function getData() {
      const response = await getMovieById(id);
      setMovie(response);
    },
  []
  );

  return (
    <SelectedMovie movie={movie} />
  );
}
