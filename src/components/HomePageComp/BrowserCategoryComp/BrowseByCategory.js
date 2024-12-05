import React, { useRef } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCamera,
  FaDesktop,
  FaGamepad,
  FaHeadphones,
  FaMobileAlt,
  FaWatchmanMonitoring,
} from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";
import { BsSmartwatch } from "react-icons/bs";

const categories = [
  { name: "Phones", icon: <FaMobileAlt /> },
  { name: "Computers", icon: <FaDesktop /> },
  { name: "SmartWatch", icon: <BsSmartwatch /> },
  { name: "Camera", icon: <FaCamera /> },
  { name: "HeadPhones", icon: <FaHeadphones /> },
  { name: "Gaming", icon: <FaGamepad /> },
  { name: "Clothes", icon: <GiClothes /> },
  { name: "Others", icon: <BiCategory /> },
];

const CategoryCard = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center w-32 h-32 bg-white border border-gray-300 rounded-lg hover:bg-red-500 hover:text-white transition duration-300 cursor-pointer">
      <div className="text-3xl">{icon}</div>
      <span className="mt-2 font-medium">{name}</span>
    </div>
  );
};

const BrowseByCategory = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -150,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 150,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative rounded-lg mt-10 ml-5 mb-10">
      <div className="flex gap-3">
        <div className="bg-red-500 text-red-500 text-sm font-semibold px-1 py-1 rounded-md inline-block">
          a
        </div>
        <h1 className="text-red-500 font-semibold ">Categories</h1>
      </div>
      <h2 className="text-2xl font-bold mb-4 mt-4 pb-2">Browse By Category</h2>
      {/* Arrows */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        onClick={scrollLeft}
      >
        <FaArrowLeft />
      </button>

      <div
        ref={carouselRef}
        className="flex overflow-x-scroll space-x-4 carousel-container"
      >
        <div>
          <div className="flex items-center justify-between gap-3 md:gap-10">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                name={category.name}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        className="absolute right-0 md:right-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        onClick={scrollRight}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default BrowseByCategory;
