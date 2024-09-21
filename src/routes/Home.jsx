import React from "react";
import { Link } from "react-router-dom";

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
          <h3 className="text-xl font-semibold">Movies</h3>
          <p className="mt-2">Explore trending movies.</p>
          <Link to="/movies">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
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
          <h3 className="text-xl font-semibold">People</h3>
          <p className="mt-2">Discover popular people.</p>
          <Link to="/people">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
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
          <h3 className="text-xl font-semibold">TV Shows</h3>
          <p className="mt-2">Find top rated TV shows.</p>
          <Link to="/tvshows">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Go to TV Shows
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
