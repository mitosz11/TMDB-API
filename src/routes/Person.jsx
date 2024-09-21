import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPersonById from "../services/getPersonById";
import SelectedPerson from "../components/SelectedPerson";

export default function Movie() {
  const { id } = useParams();
  const [person, setPerson] = useState([]);

  useEffect(
    () =>
      async function getData() {
        const response = await getPersonById(id);
        setPerson(response);
      },
    []
  );

  console.log(person)

  return (
    <SelectedPerson person={person} />
  ) 
}
