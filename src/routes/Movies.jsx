import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getAllMovies, { searchMovies } from "../services/getAllMovies";
import Pagination from "../components/Pagination";
import genreNameArray from "../utils/genreNameArray";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (isSearching && searchQuery) {
      searchMovies(searchQuery, currentPage).then((data) => setMovies(data));
    } else {
      getAllMovies(currentPage).then((data) => setMovies(data));
    }
  }, [currentPage, searchQuery, isSearching]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setIsSearching(e.target.value.length > 0);
    setCurrentPage(1);
  };

  return (
    <>
      <h1 className="text-center text-3xl uppercase py-4">Trending Movies</h1>
      <div className="flex justify-center py-4">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border rounded-lg w-80"
        />
      </div>

      <Pagination
        setCurrentPage={setCurrentPage}
        totalPages={movies.total_pages || 500}
        currentPage={currentPage}
      />

      <div className="flex justify-center gap-4 flex-wrap mx-4 my-8">
        {movies.results &&
          movies.results.map((movie) => (
            <div
              key={movie.id}
              className="bg-white shadow-md rounded-lg overflow-hidden w-64 transition-transform duration-300 hover:scale-105"
            >
              <Link to={`/movies/movie/${movie.id}`}>
                <img
                  className="w-full h-96 object-cover"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <h5 className="text-center text-lg font-semibold truncate mb-1">
                  {movie.title}
                </h5>
                <span className="text-red-500 text-center text-lg font-bold">
                  {movie.release_date?.slice(0, 4)}
                </span>
                <div className="flex flex-wrap gap-1">
                  {genreNameArray(movie.genre_ids).map((genre) => (
                    <span
                      key={genre}
                      className="bg-blue-200 text-gray-900 px-2 py-1 rounded-md text-xs"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      <Pagination
        setCurrentPage={setCurrentPage}
        totalPages={movies.total_pages || 500}
        currentPage={currentPage}
      />
    </>
  );
}
