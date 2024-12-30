import React from "react";
import { FaBatteryFull, FaBolt, FaDatabase, FaFileAlt, FaLaptop, FaMicrochip, FaMobile, FaTablet, FaWater } from "react-icons/fa";

const BestSelling = () => {
  const repairServices = [
    { icon: <FaMobile />, title: "Mobile Screen Replacement" },
    { icon: <FaBatteryFull />, title: "Mobile Battery Replacement" },
    { icon: <FaTablet />, title: "iPad Screen Replacement" },
    { icon: <FaBatteryFull />, title: "iPad Battery Replacement" },
    { icon: <FaDatabase />, title: "Data Recovery" },
    { icon: <FaBolt />, title: "Charging Port Replacement" },
    { icon: <FaWater />, title: "Liquid/Water Damage" },
    { icon: <FaMicrochip />, title: "Micro Soldering Logic Boards" },
    { icon: <FaFileAlt />, title: "Insurance Report" },
    { icon: <FaLaptop />, title: "Laptop Screen Replacement" }
  ];

  return (
    <div className="mt-24 lg:mx-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Common Repairs for your Devices</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {repairServices.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
            hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow duration-300
            flex flex-col items-center text-center"
          >
            <div className="text-4xl text-lime-500 mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
