import React from "react";

export default function SelectedPerson({ person }) {
  return (
    <>
      <h1 className="text-center p-4 text-2xl font-bold">{person.name}</h1>
      <div className="flex p-5 gap-5">
        <img
          src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
          alt={person.name}
          className="w-1/3"
        />
        <p className="w-1/2 text-center">{person.biography}</p>
        <ul className="w-1/4 space-y-2">
          <li>Birthday: {person.birthday}</li>
          <li>Place of birth: {person.place_of_birth}</li>
          <li>Popularity: {person.popularity}</li>
          <li>Known for department: {person.known_for_department}</li>
        </ul>
      </div>
    </>
  );
}
