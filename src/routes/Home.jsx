import React from "react";
import { Link } from "react-router-dom";
import { FaFilm, FaUsers, FaTv } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex gap-8 justify-center items-center p-5 h-screen">
      <div className="w-72 shadow-lg rounded-lg flex flex-col">
        <img
          src="https://image.tmdb.org/t/p/w500/izGX7npHEopDQvngYcxMJEfcFbj.jpg"
          alt="Movies"
          className="w-full h-96 object-cover rounded-t-lg"
        />
        <div className="p-4 text-center flex-grow">
          <h3 className="text-xl font-semibold flex items-center justify-center">
            Movies
          </h3>
          <p className="mt-2">Explore trending movies.</p>
          <Link to="/movies" className="flex justify-center">
            <button className="mt-4 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
              <FaFilm className="mr-2" />
              Go to Movies
            </button>
          </Link>
        </div>
      </div>

      <div className="w-72 shadow-lg rounded-lg flex flex-col">
        <img
          src="https://image.tmdb.org/t/p/w500/lldeQ91GwIVff43JBrpdbAAeYWj.jpg"
          alt="People"
          className="w-full h-96 object-cover rounded-t-lg"
        />
        <div className="p-4 text-center flex-grow">
          <h3 className="text-xl font-semibold flex items-center justify-center">
            People
          </h3>
          <p className="mt-2">Discover popular people.</p>
          <Link to="/people" className="flex justify-center">
            <button className="mt-4 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
              <FaUsers className="mr-2" />
              Go to People
            </button>
          </Link>
        </div>
      </div>

      <div className="w-72 shadow-lg rounded-lg flex flex-col">
        <img
          src="https://image.tmdb.org/t/p/w500//ywbacot78IuNhGW4uVZPxxxVTkm.jpg"
          alt="TV Shows"
          className="w-full h-96 object-cover rounded-t-lg"
        />
        <div className="p-4 text-center flex-grow">
          <h3 className="text-xl font-semibold flex items-center justify-center">
            TV Shows
          </h3>
          <p className="mt-2">Find top rated TV shows.</p>
          <Link to="/tvshows" className="flex justify-center">
            <button className="mt-4 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
              <FaTv className="mr-2" />
              Go to TV Shows
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
