import React from "react";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="relative p-4 rounded-lg shadow-md hover:shadow-lg bg-white w-[270px] h-[350px]">
      <div className="bg-[#F5F5F5]">
        {/* Discount Badge */}
        <div className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded w-12">
          -40%
        </div>
        {/* Image Section */}
        <div className="relative">
          <img
            src="https://th.bing.com/th/id/R.1618b1f3eab97325212502eb67102ab1?rik=kw0F02lHoDKzsw&pid=ImgRaw&r=0" // Replace with actual image URL
            alt="HAVIT HV-G92 Gamepad"
            className="w-full h-40 object-contain"
          />
          {/* Favorite and View Icons */}
          <div className="absolute top-0 right-1 flex flex-col gap-2">
            <button className="p-2 bg-white rounded-full hover:text-red-500">
              <AiOutlineHeart className="text-black-500 text-lg" />
            </button>
            <button className="p-2 bg-white rounded-full hover:text-red-500">
              <AiOutlineEye className="text-black-500 text-lg" />
            </button>
          </div>
        </div>
      </div>
      {/* Product Details */}
      <div className="mt-10">
        <h3 className="mt-4 text-md font-semibold text-gray-800">
          HAVIT HV-G92 Gamepad
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-red-500 text-md font-bold">$120</span>
          <span className="ml-2 text-gray-400 line-through">$160</span>
        </div>
        {/* Ratings */}
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span className="ml-2 text-gray-500">(88)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
