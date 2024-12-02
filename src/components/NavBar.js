import React, { useState } from "react";
import { FaSearch, FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="px-2 py-4 mx-4 lg:mx-24  bg-white  ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold">Exclusive</div>

          {/* Hamburger Icon for Small Screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <Link to="/home" className="hover:underline cursor-pointer">
              Home
            </Link>
            <Link to="/contact" className="hover:underline cursor-pointer">
              Contact
            </Link>
            <Link to="/about" className="hover:underline cursor-pointer">
              About
            </Link>
            <Link to="/" className="hover:underline cursor-pointer">
              Sign Up
            </Link>
          </ul>

          {/* Search and Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center border px-3 py-1 gap-2 rounded-md shadow-sm">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="outline-none text-sm flex-grow"
              />
              <FaSearch className="text-gray-500" size={16} />
            </div>

            <FaRegHeart
              className="text-gray-700 hover:text-red-500 cursor-pointer"
              size={20}
            />
            <HiOutlineShoppingCart
              className="text-gray-700 hover:text-green-500 cursor-pointer"
              size={20}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            <ul className="md:hidden flex flex-col  mt-8 text-sm font-semibold border-t-2 ">
              <Link
                to="/home"
                className="hover:bg-black hover:text-white text-2xl cursor-pointer mt-6 p-2"
              >
                Home
              </Link>
              <Link
                to="/contact"
                className="hover:bg-black hover:text-white text-2xl cursor-pointer p-2"
              >
                Contact
              </Link>
              <Link
                to="/about"
                className="hover:bg-black hover:text-white text-2xl cursor-pointer p-2"
              >
                About
              </Link>
              <Link
                to="/"
                className="hover:bg-black hover:text-white text-2xl cursor-pointer p-2"
              >
                Sign Up
              </Link>

              <div className="flex items-center border px-3 border-black py-1 gap-2 rounded-md shadow-sm mt-3">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="outline-none text-sm flex-grow font-medium p-2"
                />
                <FaSearch className="text-gray-500" size={25} />
              </div>

              <div className="flex space-x-7 mt-6">
                <FaRegHeart
                  className="text-gray-700 hover:text-red-500 cursor-pointer"
                  size={30}
                />
                <HiOutlineShoppingCart
                  className="text-gray-700 hover:text-green-500 cursor-pointer"
                  size={30}
                />
              </div>
            </ul>
          </>
        )}
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
