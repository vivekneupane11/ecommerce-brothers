import React from "react";
import { FaArrowUp, FaHeadset, FaShieldAlt, FaTruck } from "react-icons/fa";

const BottomComp = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className=" py-20 relative lg:mx-24">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded-full">
              <FaTruck className="text-black text-3xl" />
            </div>
            <h3 className="text-xl font-bold mt-4">FREE AND FAST DELIVERY</h3>
            <p className="text-gray-600">
              Free delivery for all orders
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded-full">
              <FaHeadset className="text-black text-3xl" />
            </div>
            <h3 className="text-xl font-bold mt-4">24/7 CUSTOMER SERVICE</h3>
            <p className="text-gray-600">Friendly 24/7 customer support</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded-full">
              <FaShieldAlt className="text-black text-3xl" />
            </div>
            <h3 className="text-xl font-bold mt-4">MONEY BACK GUARANTEE</h3>
            <p className="text-gray-600">We return money within 30 days</p>
          </div>
        </div>

        <div className="my-8 absolute bottom-0 right-0">
          <button
            onClick={scrollToTop}
            className=" p-4 rounded-full shadow-md hover:bg-gray-200 transition duration-200"
          >
            <FaArrowUp className="text-black text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomComp;
