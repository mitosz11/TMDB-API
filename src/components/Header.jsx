import { Link } from "react-router-dom";
import { FaFilm, FaUsers, FaTv, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref a menühöz

  // useEffect a kattintás figyelésére
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Bezárja a menüt, ha kívülre kattintunk
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold flex items-center">
          <img
            className="w-16 transition-transform duration-300 hover:rotate-12"
            src="/logo.jpg"
            alt="Logo"
          />
        </Link>

        {/* Hamburger ikon a mobil nézethez */}
        <div
          className="md:hidden text-white cursor-pointer flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Nagyobb kijelzőkhöz való linkek */}
        <div className="hidden md:flex">
          <Link
            to="/movies"
            className="flex items-center text-white hover:bg-gradient-to-r hover:from-gray-500 hover:to-blue-600 hover:text-white transition duration-300 transform hover:scale-110 rounded-lg px-6 py-3 uppercase shadow-md"
          >
            <FaFilm className="mr-2" /> Movies
          </Link>
          <Link
            to="/people"
            className="flex items-center text-white hover:bg-gradient-to-r hover:from-gray-500 hover:to-blue-600 hover:text-white transition duration-300 transform hover:scale-110 rounded-lg px-6 py-3 uppercase shadow-md"
          >
            <FaUsers className="mr-2" /> People
          </Link>
          <Link
            to="/tvshows"
            className="flex items-center text-white hover:bg-gradient-to-r hover:from-gray-500 hover:to-blue-600 hover:text-white transition duration-300 transform hover:scale-110 rounded-lg px-6 py-3 uppercase shadow-md"
          >
            <FaTv className="mr-2" /> TV Shows
          </Link>
        </div>

        {/* Mobil nézet menü */}
        <div
          ref={menuRef} // Ref hozzárendelése a mobil menühöz
          className={`${
            menuOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white px-4`}
        >
          <Link
            to="/movies"
            className="flex items-center px-6 py-3 text-white hover:bg-gradient-to-r hover:from-gray-500 hover:to-blue-600 hover:text-white transition duration-300 transform hover:scale-110 uppercase shadow-md"
            onClick={() => setMenuOpen(false)}
          >
            <FaFilm className="mr-2" /> Movies
          </Link>
          <Link
            to="/people"
            className="flex items-center px-6 py-3 text-white hover:bg-gradient-to-r hover:from-gray-500 hover:to-blue-600 hover:text-white transition duration-300 transform hover:scale-110 uppercase shadow-md"
            onClick={() => setMenuOpen(false)}
          >
            <FaUsers className="mr-2" /> People
          </Link>
          <Link
            to="/tvshows"
            className="flex items-center px-6 py-3 text-white hover:bg-gradient-to-r hover:from-gray-500 hover:to-blue-600 hover:text-white transition duration-300 transform hover:scale-110 uppercase shadow-md"
            onClick={() => setMenuOpen(false)}
          >
            <FaTv className="mr-2" /> TV Shows
          </Link>
        </div>
      </nav>
    </header>
  );
}
