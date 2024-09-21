import React from "react";
import { FaBirthdayCake, FaMapMarkerAlt, FaStar } from "react-icons/fa";

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
          <div className="mt-5 bg-gray-400 p-4 rounded-lg shadow-md">
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-semibold text-gray-800 flex items-center">
                    <FaBirthdayCake className="inline mr-2" />
                    Birthday:
                  </td>
                  <td className="py-2 text-gray-700">{person.birthday}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold text-gray-800 flex items-center">
                    <FaMapMarkerAlt className="inline mr-2" />
                    Place of Birth:
                  </td>
                  <td className="py-2 text-gray-700">
                    {person.place_of_birth}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-gray-800 flex items-center">
                    <FaStar className="inline mr-2" />
                    Popularity:
                  </td>
                  <td className="py-2 text-gray-700">{person.popularity}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-gray-800 flex items-center">
                    <FaStar className="inline mr-2" />
                    Known For Department:
                  </td>
                  <td className="py-2 text-gray-700">
                    {person.known_for_department}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
