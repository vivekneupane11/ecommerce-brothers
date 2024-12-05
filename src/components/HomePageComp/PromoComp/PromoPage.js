import React from "react";
import iphoneimage from "../../../assets/iphone.jpg";
import { FaApple } from "react-icons/fa";

const PromoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-3 my-3 lg:gap-36 bg-black text-white md:flex-row md:mx-6 md:my-6 lg:mx-24 lg:h-[400px] ">
      <div className="text-center mt-8 md:ml-6">
        <div className="flex items-center justify-center  ">
          <FaApple className="text-4xl " />
          <span className="text-lg font-semibold">iPhone 14 Series</span>
        </div>
        <h1 className="text-3xl sm:text-4xl  font-bold mb-4 mt-6">
          Up to 10% off Voucher
        </h1>
        <button className="my-4 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition duration-300">
          Shop Now →
        </button>
      </div>
      <div>
        <img
          src={iphoneimage}
          alt="iPhone 14"
          className="w-full h-auto rounded-lg md:w-96 md:my-6 lg:h-80 lg:mt-20"
        />
      </div>
    </div>
  );
};

export default PromoPage;
