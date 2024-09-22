import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getAllPeople, { searchPeople } from "../services/getAllPeople";
import Pagination from "../components/Pagination";

export default function People() {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (isSearching && searchQuery) {
      searchPeople(searchQuery, currentPage).then((data) => setPeople(data));
    } else {
      getAllPeople(currentPage).then((data) => setPeople(data));
    }
  }, [currentPage, searchQuery, isSearching]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setIsSearching(e.target.value.length > 0);
    setCurrentPage(1);
  };

  return (
    <>
      <h1 className="text-center text-3xl uppercase py-4">Movie Stars</h1>

      <div className="flex justify-center py-4">
        <input
          type="text"
          placeholder="Search for a person..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border rounded-lg w-80"
        />
      </div>

      <Pagination
        setCurrentPage={setCurrentPage}
        totalPages={people.total_pages || 500}
        currentPage={currentPage}
      />

      <div className="flex justify-center gap-4 flex-wrap mx-4 my-8">
        {people.results &&
          people.results.map((person) => (
            <div
              key={person.id}
              className="bg-white shadow-md rounded-lg overflow-hidden w-64 transition-transform duration-300 hover:scale-105"
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
        totalPages={people.total_pages || 500}
        currentPage={currentPage}
      />
    </>
  );
}
