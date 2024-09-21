import React from "react";

export default function SelectedMovie({ movie }) {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-center p-4 text-3xl font-bold text-gray-800">
        {movie.title}
      </h1>
      <div className="flex items-start gap-5">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-1/3 rounded-lg shadow-lg"
        />
        <div className="w-2/3 flex flex-col">
          <p className="text-lg text-gray-700">{movie.overview}</p>
          <ul className="mt-5 space-y-2 bg-gray-100 p-4 rounded-lg shadow-md">
            <li className="text-gray-800">
              <strong>Release Date:</strong> {movie.release_date}
            </li>
            <li className="text-gray-800">
              <strong>Runtime:</strong> {movie.runtime} mins
            </li>
            <li className="text-gray-800">
              <strong>Budget:</strong> ${movie.budget}
            </li>
            <li className="text-gray-800">
              <strong>Revenue:</strong> ${movie.revenue}
            </li>
            <li className="text-gray-800">
              <strong>Vote:</strong> {movie.vote_average}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
