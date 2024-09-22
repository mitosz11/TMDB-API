import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getAllTvShows, { searchTvShows } from "../services/getAllTvShow";
import Pagination from "../components/Pagination";

export default function TvShows() {
  const [tvShows, setTvShows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (isSearching && searchQuery) {
      searchTvShows(searchQuery, currentPage).then((data) => setTvShows(data));
    } else {
      getAllTvShows(currentPage).then((data) => setTvShows(data));
    }
  }, [currentPage, searchQuery, isSearching]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setIsSearching(e.target.value.length > 0);
    setCurrentPage(1);
  };

  return (
    <>
      <h1 className="text-center text-3xl uppercase py-4">TV Shows</h1>

      <div className="flex justify-center py-4">
        <input
          type="text"
          placeholder="Search for a TV show..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border rounded-lg w-80"
        />
      </div>

      <Pagination
        setCurrentPage={setCurrentPage}
        totalPages={tvShows.total_pages || 500}
        currentPage={currentPage}
      />

      <div className="flex justify-center gap-4 flex-wrap mx-4 my-8">
        {tvShows.results &&
          tvShows.results.map((tvShow) => (
            <div
              key={tvShow.id}
              className="bg-white shadow-md rounded-lg overflow-hidden w-64 transition-transform duration-300 hover:scale-105"
            >
              <Link to={`/tvshows/show/${tvShow.id}`}>
                <img
                  className="w-full h-80 object-cover"
                  src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                  alt={tvShow.name}
                />
              </Link>
              <div className="p-4">
                <h5 className="text-center text-lg font-semibold truncate">
                  {tvShow.name}
                </h5>
              </div>
            </div>
          ))}
      </div>

      <Pagination
        setCurrentPage={setCurrentPage}
        totalPages={tvShows.total_pages || 500}
        currentPage={currentPage}
      />
    </>
  );
}
