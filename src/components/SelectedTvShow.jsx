import React from "react";

export default function SelectedTvShow({ tvShow }) {
  return (
    <>
      <h1 className="text-center p-4 text-2xl font-bold">
        {tvShow.original_name}
      </h1>
      <div className="flex p-5 gap-5">
        <img
          src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
          alt={tvShow.original_name}
          className="w-1/3"
        />
        <p className="w-1/2 text-center">{tvShow.overview}</p>
        <ul className="w-1/4 space-y-2">
          <li>Type: {tvShow.type}</li>
          <li>First Air Date: {tvShow.first_air_date}</li>
          <li>Last Air Date: {tvShow.last_air_date}</li>
          <li>Original Language: {tvShow.original_language}</li>
          <li>Popularity: {tvShow.popularity}</li>
          <li>Vote: {tvShow.vote_average}</li>
        </ul>
      </div>
    </>
  );
}
