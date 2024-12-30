import React, { useContext, useState } from "react";
import {
  FaBars,
  FaDatabase,
  FaEnvelope,
  FaLaptop,
  FaMobile,
  FaSearch,
  FaTablet,
  FaTimes,
  FaUserCircle
} from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { FirebaseContext } from "../context/FirebaseProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const { currentUser } = useContext(FirebaseContext);
  const navigate = useNavigate();



  const menuItems = {
    phones: [
      "iPhone 14 Pro Max",
      "iPhone 13",
      "Samsung Galaxy S23", 
      "Google Pixel 7",
      "OnePlus 11",
      "Xiaomi 13 Pro",
      "Samsung Galaxy A54",
      "iPhone 12",
      "Samsung Galaxy Z Fold 4",
      "Google Pixel 6a"
    ],
    ipads: [
      "iPad Pro 12.9",
      "iPad Air 5", 
      "iPad mini 6",
      "iPad 10th gen",
      "iPad Pro 11",
      "iPad Air 4",
      "iPad 9th gen",
      "iPad Pro 2021",
      "iPad Air 3",
      "iPad mini 5"
    ],
    laptops: [
      "MacBook Pro 16",
      "MacBook Air M2",
      "Dell XPS 15",
      "Lenovo ThinkPad X1",
      "HP Spectre x360",
      "ASUS ROG Zephyrus",
      "Acer Swift 5",
      "Microsoft Surface Laptop",
      "Razer Blade 15",
      "MSI GS66 Stealth"
    ],
    dataRecovery: [
      "Hard Drive Recovery",
      "SSD Data Recovery",
      "iPhone Data Recovery",
      "iPad Data Recovery", 
      "Android Data Recovery",
      "USB Drive Recovery",
      "SD Card Recovery",
      "RAID Recovery",
      "Laptop Data Recovery",
      "Water Damage Recovery"
    ]
  };

  return (
    <nav className="px-2 py-4 mx-4 lg:mx-24 bg-white">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold font-['Montserrat'] tracking-wide">Brothers Repair</Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        <div className="hidden md:flex space-x-6 text-sm font-medium relative">
          <Link to="/"
            className="flex items-center gap-2 cursor-pointer hover:text-gray-800"
            onMouseEnter={() => setActiveSubmenu('phones')}
            onMouseLeave={() => setActiveSubmenu(null)}
          >
            <FaMobile /> Mobile Phone Repairs
            {activeSubmenu === 'phones' && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 w-64 z-50">
                {menuItems.phones.map((phone) => (
                  <Link key={phone} to="/" className="block py-2 px-4 hover:bg-gray-100 text-gray-800">
                    {phone}
                  </Link>
                ))}
              </div>
            )}
          </Link>

          <Link to="/"
            className="flex items-center gap-2 cursor-pointer hover:text-gray-800"
            onMouseEnter={() => setActiveSubmenu('ipads')}
            onMouseLeave={() => setActiveSubmenu(null)}
          >
            <FaTablet /> iPad Repairs
            {activeSubmenu === 'ipads' && (
              <div className="absolute top-full left-1/4 bg-white shadow-lg rounded-md p-4 w-64 z-50">
                {menuItems.ipads.map((ipad) => (
                  <Link key={ipad} to="/" className="block py-2 px-4 hover:bg-gray-100 text-gray-800">
                    {ipad}
                  </Link>
                ))}
              </div>
            )}
          </Link>

          <Link to="/"
            className="flex items-center gap-2 cursor-pointer hover:text-gray-800"
            onMouseEnter={() => setActiveSubmenu('laptops')}
            onMouseLeave={() => setActiveSubmenu(null)}
          >
            <FaLaptop /> Laptop Repairs
            {activeSubmenu === 'laptops' && (
              <div className="absolute top-full left-2/4 bg-white shadow-lg rounded-md p-4 w-64 z-50">
                {menuItems.laptops.map((laptop) => (
                  <Link key={laptop} to="/" className="block py-2 px-4 hover:bg-gray-100 text-gray-800">
                    {laptop}
                  </Link>
                ))}
              </div>
            )}
          </Link>

          <Link to="/"
            className="flex items-center gap-2 cursor-pointer hover:text-gray-800"
            onMouseEnter={() => setActiveSubmenu('dataRecovery')}
            onMouseLeave={() => setActiveSubmenu(null)}
          >
            <FaDatabase /> Data Recovery
            {activeSubmenu === 'dataRecovery' && (
              <div className="absolute top-full right-0 bg-white shadow-lg rounded-md p-4 w-64 z-50">
                {menuItems.dataRecovery.map((service) => (
                  <Link key={service} to="/" className="block py-2 px-4 hover:bg-gray-100 text-gray-800">
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </Link>

          <Link to="/" className="flex items-center gap-2 hover:text-gray-800 text-gray-800">
            <FaEnvelope /> Contact Us
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center border px-3 py-1 gap-2 rounded-md shadow-sm">
            <input
              type="text"
              placeholder="Search repairs..."
              className="outline-none text-sm flex-grow"
            />
            <FaSearch className="text-gray-500" size={16} />
          </div>

          {currentUser && (
            <FaUserCircle
              onClick={() => navigate("/account")}
              className="text-gray-700 hover:text-gray-800 cursor-pointer"
              size={20}
            />
          )}
        </div>
      </div>

      {isMenuOpen && (
        <ul className="md:hidden flex flex-col mt-8 text-sm font-semibold border-t-2">
          <div className="p-4 border-b">
            <div className="font-bold mb-2 flex items-center gap-2">
              <FaMobile /> Mobile Phone Repairs
            </div>
            {menuItems.phones.map((phone) => (
              <Link key={phone} to="/" className="block py-1 hover:text-gray-800 text-gray-800">
                {phone}
              </Link>
            ))}
          </div>

          <div className="p-4 border-b">
            <div className="font-bold mb-2 flex items-center gap-2">
              <FaTablet /> iPad Repairs
            </div>
            {menuItems.ipads.map((ipad) => (
              <Link key={ipad} to="/" className="block py-1 hover:text-gray-800 text-gray-800">
                {ipad}
              </Link>
            ))}
          </div>

          <div className="p-4 border-b">
            <div className="font-bold mb-2 flex items-center gap-2">
              <FaLaptop /> Laptop Repairs
            </div>
            {menuItems.laptops.map((laptop) => (
              <Link key={laptop} to="/" className="block py-1 hover:text-gray-800 text-gray-800">
                {laptop}
              </Link>
            ))}
          </div>

          <div className="p-4 border-b">
            <div className="font-bold mb-2 flex items-center gap-2">
              <FaDatabase /> Data Recovery
            </div>
            {menuItems.dataRecovery.map((service) => (
              <Link key={service} to="/" className="block py-1 hover:text-gray-800 text-gray-800">
                {service}
              </Link>
            ))}
          </div>

          <Link to="/" className="p-4 flex items-center gap-2 hover:text-gray-800 text-gray-800">
            <FaEnvelope /> Contact Us
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
