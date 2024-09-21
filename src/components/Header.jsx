import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="text-white text-xl font-bold">
          <img className="w-16" src="/logo.jpg" alt="" />
        </Link>
        <div className="space-x-6">
          <Link
            to="/movies"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Movies
          </Link>
          <Link
            to="/people"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            People
          </Link>
          <Link
            to="/tvshows"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            TV Shows
          </Link>
        </div>
      </nav>
    </header>
  );
}
