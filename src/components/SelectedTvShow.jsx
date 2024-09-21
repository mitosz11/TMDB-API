import React from "react";
import { FaCalendarAlt, FaLanguage, FaStar } from "react-icons/fa";

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
          <div className="mt-5 bg-gray-400 p-4 rounded-lg shadow-md">
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-semibold text-gray-800 flex items-center">
                    <FaCalendarAlt className="inline mr-2" />
                    First Air Date:
                  </td>
                  <td className="py-2 text-gray-700">
                    {tvShow.first_air_date}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold text-gray-800 flex items-center">
                    <FaCalendarAlt className="inline mr-2" />
                    Last Air Date:
                  </td>
                  <td className="py-2 text-gray-700">{tvShow.last_air_date}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold text-gray-800 flex items-center">
                    <FaLanguage className="inline mr-2" />
                    Original Language:
                  </td>
                  <td className="py-2 text-gray-700">
                    {tvShow.original_language}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-gray-800 flex items-center">
                    <FaStar className="inline mr-2" />
                    Popularity:
                  </td>
                  <td className="py-2 text-gray-700">{tvShow.popularity}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-gray-800 flex items-center">
                    <FaStar className="inline mr-2" />
                    Vote:
                  </td>
                  <td className="py-2 text-gray-700">{tvShow.vote_average}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
