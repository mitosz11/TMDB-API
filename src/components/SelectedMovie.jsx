import React from "react";

export default function SelectedMovie({ movie }) {
  return (
    <div className="flex p-5 gap-5">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-1/3"
      />
      <p className="w-1/2 text-center">{movie.overview}</p>
      <ul className="w-1/4 space-y-2">
        <li>Release date: {movie.release_date}</li>
        <li>Runtime: {movie.runtime} mins</li>
        <li>Budget: ${movie.budget}</li>
        <li>Revenue: ${movie.revenue}</li>
        <li>Vote: {movie.vote_average}</li>
      </ul>
    </div>
  );
}
