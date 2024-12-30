import React from "react";
import { FaDatabase, FaEnvelope, FaLaptop, FaMobile, FaTablet, FaWhatsapp } from "react-icons/fa";
import iphoneimage from "../../../assets/iphone.jpg";

const PromoPage = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center mx-3 my-3 lg:gap-36 bg-black text-white md:flex-row md:mx-6 md:my-6 lg:mx-24 lg:h-[500px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${iphoneimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex flex-col w-full gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 w-full">
          <div className="bg-black/20 p-6 rounded-xl text-center hover:bg-black/30 transition duration-300 backdrop-blur-[2px] shadow-lg border border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <FaMobile className="text-4xl text-blue-400" />
            </div>
            <h3 className="font-semibold mb-3 text-xl">Need Mobile Help?</h3>
            <p className="text-sm text-gray-400">Expert repairs for all smartphone brands</p>
          </div>

          <div className="bg-black/20 p-6 rounded-xl text-center hover:bg-black/30 transition duration-300 backdrop-blur-[2px] shadow-lg border border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <FaLaptop className="text-4xl text-blue-400" />
            </div>
            <h3 className="font-semibold mb-3 text-xl">Laptop Issues?</h3>
            <p className="text-sm text-gray-400">Professional laptop repair services</p>
          </div>

          <div className="bg-black/20 p-6 rounded-xl text-center hover:bg-black/30 transition duration-300 backdrop-blur-[2px] shadow-lg border border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <FaTablet className="text-4xl text-blue-400" />
            </div>
            <h3 className="font-semibold mb-3 text-xl">iPad Problems?</h3>
            <p className="text-sm text-gray-400">Specialized iPad & tablet repairs</p>
          </div>

          <div className="bg-black/20 p-6 rounded-xl text-center hover:bg-black/30 transition duration-300 backdrop-blur-[2px] shadow-lg border border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <FaDatabase className="text-4xl text-blue-400" />
            </div>
            <h3 className="font-semibold mb-3 text-xl">Lost Data?</h3>
            <p className="text-sm text-gray-400">Professional data recovery services</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 pb-8">
          <a 
            href="https://wa.me/61426257977" 
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 transition-colors px-6 py-3 rounded-full"
          >
            <FaWhatsapp className="text-2xl" />
            <span>+61 426 257 977</span>
          </a>
          <a 
            href="mailto:brotherrepair@gmail.com"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded-full"
          >
            <FaEnvelope className="text-2xl" />
            <span>brotherrepair@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoPage;
