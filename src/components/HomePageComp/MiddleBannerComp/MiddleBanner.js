import React from "react";
import speakerimage from "../../../assets/speaker.png";

const MiddleBanner = () => {
  return (
    <div className="flex flex-col m-4 mt-5 md:flex-row lg:my-10 lg:mx-24 lg:gap-28 lg:justify-center lg:items-center  bg-black text-white p-12 rounded-lg">
      <div>
        <h2 className="text-lime-500 mb-4 pb-10 text-xl">Categories</h2>
        <h1 className="text-4xl font-bold mb-6 leading-tight">
          Enhance Your Music Experience
        </h1>
        <button className="bg-lime-500 text-white py-2 px-6 text-lg rounded-md hover:bg-lime-600 transition">
          Buy Now!
        </button>
      </div>
      <img
        src={speakerimage}
        alt="speaker"
        className="h-auto rounded-lg md:w-1/2 lg:w-1/3"
      />
    </div>
  );
};

export default MiddleBanner;
