import React from "react";

export default function SelectedTvShow({ tvShow }) {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-center p-4 text-3xl font-bold text-gray-800">
        {tvShow.original_name}
      </h1>
      <div className="flex items-start gap-5">
        <img
          src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
          alt={tvShow.original_name}
          className="w-1/3 rounded-lg shadow-lg"
        />
        <div className="w-2/3 flex flex-col">
          <p className="text-lg text-gray-700">{tvShow.overview}</p>
          <ul className="mt-5 space-y-2 bg-gray-100 p-4 rounded-lg shadow-md">
            <li className="text-gray-800">
              <strong>Type:</strong> {tvShow.type}
            </li>
            <li className="text-gray-800">
              <strong>First Air Date:</strong> {tvShow.first_air_date}
            </li>
            <li className="text-gray-800">
              <strong>Last Air Date:</strong> {tvShow.last_air_date}
            </li>
            <li className="text-gray-800">
              <strong>Original Language:</strong> {tvShow.original_language}
            </li>
            <li className="text-gray-800">
              <strong>Popularity:</strong> {tvShow.popularity}
            </li>
            <li className="text-gray-800">
              <strong>Vote:</strong> {tvShow.vote_average}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
