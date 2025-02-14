import React, { useState } from "react";
import useStore from "../store/store";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { biodata } = useStore();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <nav className="bg-transparent dark:bg-transparent p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-semibold">
            <img
              src={require("../assets/images/logo.png")}
              alt="logo"
              width={"50px"}
              style={{ backgroundColor: "transparent" }}
            />
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-white dark:text-white hover:text-yellow-400 dark:hover:text-yellow-400"
            >
              Home
            </Link>
            <Link
              to="/pokemon"
              className="text-white dark:text-white hover:text-yellow-400 dark:hover:text-yellow-400"
            >
              Pokémon
            </Link>
            <Link
              to="/games"
              className="text-white dark:text-white hover:text-yellow-400 dark:hover:text-yellow-400"
            >
              Games
            </Link>
            <Link
              to="/about"
              className="text-white dark:text-white hover:text-yellow-400 dark:hover:text-yellow-400"
            >
              About
            </Link>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 mr-10">
            {/* buat notif */}
            <svg
              className="bell-icon"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
              {/* Notification Dot */}
              <circle cx="18" cy="6" r="4" fill="red" className="notification-dot" />
            </svg>


            {/* buat profile */}
            <div className="relative ml-3">
              <img
                class="size-8 rounded-full"
                src={require("../assets/images/profile.png")}
                alt="profile"
              />
            </div>
            <span className="ml-3 text-white">{biodata.name}</span>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <Link
            to="#"
            className="block px-4 py-2 text-white hover:text-yellow-400"
          >
            Home
          </Link>
          <Link
            to="#about"
            className="block px-4 py-2 text-white hover:text-yellow-400"
          >
            About
          </Link>
          <Link
            to="#contact"
            className="block px-4 py-2 text-white hover:text-yellow-400"
          >
            Pokémon
          </Link>
        </div>
      </nav>
      
  );
};

export default Navbar;
