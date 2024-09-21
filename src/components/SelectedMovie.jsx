import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaDollarSign,
  FaStar,
  FaVoteYea,
} from "react-icons/fa";

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
          <div className="mt-5 bg-gray-400 p-4 rounded-lg shadow-md">
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-semibold text-gray-800  flex items-center">
                    <FaCalendarAlt className="inline mr-2" />
                    Release Date:
                  </td>
                  <td className="py-2 text-gray-700">{movie.release_date}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold text-gray-800 flex items-center">
                    <FaClock className="inline mr-2" />
                    Runtime:
                  </td>
                  <td className="py-2 text-gray-700">{movie.runtime} mins</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold text-gray-800 flex items-center">
                    <FaDollarSign className="inline mr-2" />
                    Budget:
                  </td>
                  <td className="py-2 text-gray-700">${movie.budget}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold text-gray-800 flex items-center">
                    <FaDollarSign className="inline mr-2" />
                    Revenue:
                  </td>
                  <td className="py-2 text-gray-700">${movie.revenue}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-gray-800 flex items-center">
                    <FaStar className="inline mr-2" />
                    Vote:
                  </td>
                  <td className="py-2 text-gray-700">{movie.vote_average}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
