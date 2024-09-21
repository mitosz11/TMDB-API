import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getTvShowById from "../services/getTvShowById";
import SelectedTvShow from "../components/SelectedTvShow";

export default function TvShow() {
  const { id } = useParams();
  const [tvShow, setTvShow] = useState([]);

  useEffect(
    () =>
      async function getData() {
        const response = await getTvShowById(id);
        setTvShow(response);
      },
    []
  );

  return (
      <SelectedTvShow tvShow={tvShow} />
  )
}
