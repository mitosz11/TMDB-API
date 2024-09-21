import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getAllPeople from "../services/getAllPeople";
import Pagination from "../components/Pagination";

export default function People() {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllPeople(currentPage).then((data) => setPeople(data));
  }, [currentPage]);

  return (
    <>
      <h1 className="text-center">Movie Stars</h1>
      <Pagination
        setCurrentPage={setCurrentPage}
        totalPages={500}
        currentPage={currentPage}
      />
      <div className="flex justify-center gap-4 flex-wrap mx-4 my-8">
        {people.results &&
          people.results.map((person) => (
            <div
              key={person.id}
              className="bg-white shadow-md rounded-lg overflow-hidden w-64"
            >
              <Link to={`/people/${person.id}`}>
                <img
                  className="w-full h-80 object-cover"
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  alt={person.original_name}
                />
              </Link>
              <div className="p-4">
                <h5 className="text-center text-lg font-semibold truncate">
                  {person.original_name}
                </h5>
              </div>
            </div>
          ))}
      </div>
      <Pagination
        setCurrentPage={setCurrentPage}
        totalPages={500}
        currentPage={currentPage}
      />
    </>
  );
}
