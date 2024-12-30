import React from "react";
import { FaDatabase, FaEnvelope, FaLaptop, FaMobile, FaTablet, FaWhatsapp } from "react-icons/fa";
import iphoneimage from "../../../assets/iphone.jpg";

const PromoPage = () => {
  return (
    <div 
      className="w-screen flex flex-col items-center justify-center bg-black text-white md:flex-row"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${iphoneimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '600px',
        height: 'auto',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        width: '100vw',
        padding: '2rem 0'
      }}
    >
      <div className="flex flex-col w-full gap-8 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-8 w-full">
          <div className="bg-black/20 p-4 sm:p-6 rounded-xl text-center hover:bg-black/30 transition duration-300 backdrop-blur-[2px] shadow-lg border border-gray-700">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <FaMobile className="text-3xl sm:text-4xl text-blue-400" />
            </div>
            <h3 className="font-semibold mb-2 sm:mb-3 text-lg sm:text-xl">Need Mobile Help?</h3>
            <p className="text-xs sm:text-sm text-gray-400">Expert repairs for all smartphone brands</p>
          </div>

          <div className="bg-black/20 p-4 sm:p-6 rounded-xl text-center hover:bg-black/30 transition duration-300 backdrop-blur-[2px] shadow-lg border border-gray-700">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <FaLaptop className="text-3xl sm:text-4xl text-blue-400" />
            </div>
            <h3 className="font-semibold mb-2 sm:mb-3 text-lg sm:text-xl">Laptop Issues?</h3>
            <p className="text-xs sm:text-sm text-gray-400">Professional laptop repair services</p>
          </div>

          <div className="bg-black/20 p-4 sm:p-6 rounded-xl text-center hover:bg-black/30 transition duration-300 backdrop-blur-[2px] shadow-lg border border-gray-700">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <FaTablet className="text-3xl sm:text-4xl text-blue-400" />
            </div>
            <h3 className="font-semibold mb-2 sm:mb-3 text-lg sm:text-xl">iPad Problems?</h3>
            <p className="text-xs sm:text-sm text-gray-400">Specialized iPad & tablet repairs</p>
          </div>

          <div className="bg-black/20 p-4 sm:p-6 rounded-xl text-center hover:bg-black/30 transition duration-300 backdrop-blur-[2px] shadow-lg border border-gray-700">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <FaDatabase className="text-3xl sm:text-4xl text-blue-400" />
            </div>
            <h3 className="font-semibold mb-2 sm:mb-3 text-lg sm:text-xl">Lost Data?</h3>
            <p className="text-xs sm:text-sm text-gray-400">Professional data recovery services</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pb-4 sm:pb-8">
          <a 
            href="https://wa.me/61426257977" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition-colors px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base"
          >
            <FaWhatsapp className="text-xl sm:text-2xl" />
            <span>+61 426 257 977</span>
          </a>
          <a 
            href="mailto:brotherrepair@gmail.com"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition-colors px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base"
          >
            <FaEnvelope className="text-xl sm:text-2xl" />
            <span>brotherrepair@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoPage;
