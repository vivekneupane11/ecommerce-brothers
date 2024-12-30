import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import speakerimage from "../../../assets/speaker.png";

const MiddleBanner = () => {
  return (
    <div className="flex flex-col m-4 mt-5 md:flex-row lg:my-10 lg:mx-24 lg:gap-28 lg:justify-center lg:items-center  bg-black text-white p-12 rounded-lg">
      <div>
        <h2 className="text-lime-500 mb-4 pb-10 text-xl">Expert Repair Services</h2>
        <h1 className="text-4xl font-bold mb-6 leading-tight">
          Professional Mobile & Laptop Repairs
        </h1>
        <a
          href="https://wa.me/61426257977"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-6 text-lg rounded-md transition"
        >
          <FaWhatsapp className="text-2xl" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
      <img
        src={speakerimage}
        alt="repair services" 
        className="h-auto rounded-lg md:w-1/2 lg:w-1/3"
        loading="lazy"
      />
    </div>
  );
};

export default MiddleBanner;
