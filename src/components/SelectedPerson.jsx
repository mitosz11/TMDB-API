import React from "react";

export default function SelectedPerson({ person }) {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-center p-4 text-3xl font-bold text-gray-800">
        {person.name}
      </h1>
      <div className="flex items-start gap-5">
        <img
          src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
          alt={person.name}
          className="w-1/3 rounded-lg shadow-lg"
        />
        <div className="w-2/3 flex flex-col">
          <p className="text-lg text-gray-700">{person.biography}</p>
          <ul className="mt-5 space-y-2 bg-gray-100 p-4 rounded-lg shadow-md">
            <li className="text-gray-800">
              <strong>Birthday:</strong> {person.birthday}
            </li>
            <li className="text-gray-800">
              <strong>Place of Birth:</strong> {person.place_of_birth}
            </li>
            <li className="text-gray-800">
              <strong>Popularity:</strong> {person.popularity}
            </li>
            <li className="text-gray-800">
              <strong>Known For Department:</strong>{" "}
              {person.known_for_department}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
