import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`p-4 fixed top-0 left-0 w-full ${
        isScrolled ? "bg-black text-white" : "bg-white text-black"
      } z-20 shadow-md transition-all`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 tracking-wide transition-all duration-300">
          Dexon
        </div>

        {/* Toggle button for small screens */}
        <button
          className={`p-2 rounded-lg ${
            isScrolled ? "bg-black text-white" : "bg-white text-black"
          } lg:hidden`}
          onClick={toggleMenu}
        >
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
            />
          </svg>
        </button>

        {/* Navbar items */}
        <div
          className={`lg:flex ${
            isMenuOpen ? "block" : "hidden"
          } absolute lg:static w-full top-16 left-0 z-10 mt-4 lg:mt-0 justify-center ${
            isScrolled ? "bg-black text-white" : "bg-white text-black"
          } transition-all`}
        >
          {/* Dropdown Example */}
          <div className="relative group lg:relative mx-4">
            <a
              href="#home"
              className="text-lg hover:text-gray-400 block px-4 py-2 flex items-center"
            >
              Home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 ml-2 transform group-hover:rotate-180 transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <div
              className={`hidden group-hover:block lg:absolute bg-white shadow-lg w-full lg:w-auto flex flex-col lg:flex-row lg:left-auto`}
            >
              <a
                href="#home1"
                className="block text-black hover:bg-gray-200 px-4 py-2"
                onClick={closeMenu}
              >
                Home 1
              </a>
              <a
                href="#home2"
                className="block text-black hover:bg-gray-200 px-4 py-2"
                onClick={closeMenu}
              >
                Home 2
              </a>
              <a
                href="#home3"
                className="block text-black hover:bg-gray-200 px-4 py-2"
                onClick={closeMenu}
              >
                Home 3
              </a>
              <a
                href="#home4"
                className="block text-black hover:bg-gray-200 px-4 py-2"
                onClick={closeMenu}
              >
                Home 4
              </a>
            </div>
          </div>

          {/* Repeat for About and Contact */}
          <div className="relative group lg:relative mx-4">
            <a
              href="#about"
              className="text-lg hover:text-gray-400 block px-4 py-2 flex items-center"
            >
              About
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 ml-2 transform group-hover:rotate-180 transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <div
              className={`hidden group-hover:block lg:absolute bg-white shadow-lg w-full lg:w-auto flex flex-col lg:flex-row lg:left-auto`}
            >
              <a
                href="#about1"
                className="block text-black hover:bg-gray-200 px-4 py-2"
                onClick={closeMenu}
              >
                About 1
              </a>
              <a
                href="#about2"
                className="block text-black hover:bg-gray-200 px-4 py-2"
                onClick={closeMenu}
              >
                About 2
              </a>
              <a
                href="#about3"
                className="block text-black hover:bg-gray-200 px-4 py-2"
                onClick={closeMenu}
              >
                About 3
              </a>
              <a
                href="#about4"
                className="block text-black hover:bg-gray-200 px-4 py-2"
                onClick={closeMenu}
              >
                About 4
              </a>
            </div>
          </div>

          <div className="relative group lg:relative mx-4">
            <a
              href="#contact"
              className="text-lg hover:text-gray-400 block px-4 py-2 flex items-center"
            >
              Contact
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 ml-2 transform group-hover:rotate-180 transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <div
              className={`hidden group-hover:block lg:absolute bg-white shadow-lg w-full lg:w-auto flex flex-col lg:flex-row lg:left-auto`}
            >
              <a
                href="#contact1"
                className="block text-black hover:bg-gray-200 px-4 py-2"
                onClick={closeMenu}
              >
                Contact 1
              </a>
              <a
                href="#contact2"
                className="block text-black hover:bg-gray-200 px-4 py-2"
                onClick={closeMenu}
              >
                Contact 2
              </a>
              <a
                href="#contact3"
                className="block text-black hover:bg-gray-200 px-4 py-2"
                onClick={closeMenu}
              >
                Contact 3
              </a>
              <a
                href="#contact4"
                className="block text-black hover:bg-gray-200 px-4 py-2"
                onClick={closeMenu}
              >
                Contact 4
              </a>
            </div>
          </div>
        </div>

        {/* Contact info for large screens */}
        <div className="hidden lg:flex flex-col md:flex-row items-center md:items-start space-x-8 md:space-y-0 md:space-x-6 p-4 bg-gray-900 rounded-lg shadow-md group transition-all duration-300 hover:bg-yellow-400">
          <h4 className="text-lg text-yellow-400 group-hover:text-black transition-all duration-300">
            <i className="fa-solid fa-envelope"></i>
          </h4>
          <p className="text-gray-300 text-sm md:text-base group-hover:text-black transition-all duration-300">
            example@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
