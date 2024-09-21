import { Link } from "react-router-dom";
import { FaFilm, FaUsers, FaTv } from "react-icons/fa"; // Importálj ikonokat

export default function Header() {
  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="text-white text-xl font-bold flex items-center">
          <img
            className="w-16 transition-transform duration-300 hover:rotate-12"
            src="/logo.jpg"
            alt="Logo"
          />
        </Link>
        <div className="flex">
          <Link
            to="/movies"
            className="flex items-center text-white hover:bg-gradient-to-r hover:from-gray-500 hover:to-blue-600 hover:text-white transition duration-300 transform hover:scale-110 rounded-lg px-6 py-3 uppercase shadow-md"
          >
            <FaFilm className="mr-2" /> 
            Movies
          </Link>
          <Link
            to="/people"
            className="flex items-center text-white hover:bg-gradient-to-r hover:from-gray-500 hover:to-blue-600 hover:text-white transition duration-300 transform hover:scale-110 rounded-lg px-6 py-3 uppercase shadow-md"
          >
            <FaUsers className="mr-2" />
            People
          </Link>
          <Link
            to="/tvshows"
            className="flex items-center text-white hover:bg-gradient-to-r hover:from-gray-500 hover:to-blue-600 hover:text-white transition duration-300 transform hover:scale-110 rounded-lg px-6 py-3 uppercase shadow-md"
          >
            <FaTv className="mr-2" />
            TV Shows
          </Link>
        </div>
      </nav>
    </header>
  );
}
