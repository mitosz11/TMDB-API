import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getAllTvShows from "../services/getAllTvShow";
import Pagination from "../components/Pagination";

export default function TvShows() {
  const [tvShows, setTvShows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllTvShows(currentPage).then((data) => setTvShows(data));
  }, [currentPage]);

  return (
    <>
      <h1 className="text-center">TV Shows</h1>
      <Pagination
        setCurrentPage={setCurrentPage}
        totalPages={500}
        currentPage={currentPage}
      />
      <div className="flex justify-center gap-4 flex-wrap mx-4 my-8">
        {tvShows.results &&
          tvShows.results.map((tvShow) => (
            <div
              key={tvShow.id}
              className="bg-white shadow-md rounded-lg overflow-hidden w-64"
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
        totalPages={500}
        currentPage={currentPage}
      />
    </>
  );
}
