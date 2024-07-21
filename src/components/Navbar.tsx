import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/Vector.png";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("Home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isAboutPage = location.pathname === "/about";
  const textColorClass = isAboutPage ? "text-white" : "text-gray-900";

  return (
    <nav className="bg-transparent container mx-auto fixed top-0 left-0 right-0 z-50">
      <div>
        <div className="w-full flex items-center justify-between my-10">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Logo" />
            <span className={`self-center text-2xl font-semibold whitespace-nowrap ${isAboutPage ? 'text-white' : ''}`}>
              Logoipsum
            </span>
          </a>

          <div className={`w-full md:flex md:w-auto ${menuOpen ? "block" : "hidden"}`} id="navbar-default">
            <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ${textColorClass}`}>
              <li>
                <a
                  href="/"
                  className={`block py-2 px-3 rounded ${activeLink === "Home" ? "font-bold" : ""} md:hover:bg-transparent md:border-0 md:hover:text-blue-700`}
                  onClick={() => handleLinkClick("Home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded ${activeLink === "Product" ? "font-bold" : ""} md:hover:bg-transparent md:border-0 md:hover:text-blue-700`}
                  onClick={() => handleLinkClick("Product")}
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded ${activeLink === "Blog" ? "font-bold" : ""} md:hover:bg-transparent md:border-0 md:hover:text-blue-700`}
                  onClick={() => handleLinkClick("Blog")}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded ${activeLink === "Pricing" ? "font-bold" : ""} md:hover:bg-transparent md:border-0 md:hover:text-blue-700`}
                  onClick={() => handleLinkClick("Pricing")}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded ${activeLink === "Contact" ? "font-bold" : ""} md:hover:bg-transparent md:border-0 md:hover:text-blue-700`}
                  onClick={() => handleLinkClick("Contact")}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`block py-2 px-3 rounded ${activeLink === "About Us" ? "font-bold" : ""} md:hover:bg-transparent md:border-0 md:hover:text-blue-700`}
                  onClick={() => handleLinkClick("About Us")}
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className={`py-2 px-3 font-bold transition ${textColorClass}`}>Sign In</button>
            <button className={`py-2 px-3 rounded-full border ${isAboutPage ? 'border-white text-white' : 'border-blue-700 text-blue-700'} hover:bg-blue-700 hover:text-white transition`}>
              Sign Up
            </button>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
