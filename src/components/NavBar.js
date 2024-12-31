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
      {id: "sr001", name: "iPhone 14 Pro Max"},
      {id: "sr002", name: "iPhone 13"},
      {id: "sr003", name: "Samsung Galaxy S23"},
      {id: "sr004", name: "Google Pixel 7"},
      {id: "sr005", name: "OnePlus 11"},
      {id: "sr006", name: "Xiaomi 13 Pro"},
      {id: "sr007", name: "Samsung Galaxy A54"},
      {id: "sr008", name: "iPhone 12"},
      {id: "sr009", name: "Samsung Galaxy Z Fold 4"},
      {id: "sr010", name: "Google Pixel 6a"}
    ],
    ipads: [
      {id: "tr001", name: "iPad Pro 12.9"},
      {id: "tr002", name: "iPad Air 5"},
      {id: "tr003", name: "iPad mini 6"},
      {id: "tr004", name: "iPad 10th gen"},
      {id: "tr005", name: "iPad Pro 11"},
      {id: "tr006", name: "iPad Air 4"},
      {id: "tr007", name: "iPad 9th gen"},
      {id: "tr008", name: "iPad Pro 2021"},
      {id: "tr009", name: "iPad Air 3"},
      {id: "tr010", name: "iPad mini 5"}
    ],
    laptops: [
      {id: "lr001", name: "MacBook Pro 16"},
      {id: "lr002", name: "MacBook Air M2"},
      {id: "lr003", name: "Dell XPS 15"},
      {id: "lr004", name: "Lenovo ThinkPad X1"},
      {id: "lr005", name: "HP Spectre x360"},
      {id: "lr006", name: "ASUS ROG Zephyrus"},
      {id: "lr007", name: "Acer Swift 5"},
      {id: "lr008", name: "Microsoft Surface Laptop"},
      {id: "lr009", name: "Razer Blade 15"},
      {id: "lr010", name: "MSI GS66 Stealth"}
    ],
    dataRecovery: [
      {id: "dr001", name: "Hard Drive Recovery"},
      {id: "dr002", name: "SSD Data Recovery"},
      {id: "dr003", name: "iPhone Data Recovery"},
      {id: "dr004", name: "iPad Data Recovery"},
      {id: "dr005", name: "Android Data Recovery"},
      {id: "dr006", name: "USB Drive Recovery"},
      {id: "dr007", name: "SD Card Recovery"},
      {id: "dr008", name: "RAID Recovery"},
      {id: "dr009", name: "Laptop Data Recovery"},
      {id: "dr010", name: "Water Damage Recovery"}
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
                  <Link key={phone.id} to={`/service/${phone.id}`} className="block py-2 px-4 hover:bg-gray-100 text-gray-800">
                    {phone.name}
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
                  <Link key={ipad.id} to={`/service/${ipad.id}`} className="block py-2 px-4 hover:bg-gray-100 text-gray-800">
                    {ipad.name}
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
                  <Link key={laptop.id} to={`/service/${laptop.id}`} className="block py-2 px-4 hover:bg-gray-100 text-gray-800">
                    {laptop.name}
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
                  <Link key={service.id} to={`/service/${service.id}`} className="block py-2 px-4 hover:bg-gray-100 text-gray-800">
                    {service.name}
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
              <Link key={phone.id} to={`/service/${phone.id}`} className="block py-1 hover:text-gray-800 text-gray-800">
                {phone.name}
              </Link>
            ))}
          </div>

          <div className="p-4 border-b">
            <div className="font-bold mb-2 flex items-center gap-2">
              <FaTablet /> iPad Repairs
            </div>
            {menuItems.ipads.map((ipad) => (
              <Link key={ipad.id} to={`/service/${ipad.id}`} className="block py-1 hover:text-gray-800 text-gray-800">
                {ipad.name}
              </Link>
            ))}
          </div>

          <div className="p-4 border-b">
            <div className="font-bold mb-2 flex items-center gap-2">
              <FaLaptop /> Laptop Repairs
            </div>
            {menuItems.laptops.map((laptop) => (
              <Link key={laptop.id} to={`/service/${laptop.id}`} className="block py-1 hover:text-gray-800 text-gray-800">
                {laptop.name}
              </Link>
            ))}
          </div>

          <div className="p-4 border-b">
            <div className="font-bold mb-2 flex items-center gap-2">
              <FaDatabase /> Data Recovery
            </div>
            {menuItems.dataRecovery.map((service) => (
              <Link key={service.id} to={`/service/${service.id}`} className="block py-1 hover:text-gray-800 text-gray-800">
                {service.name}
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
