import React, { useState } from "react";
import ProductCard from "./ProductCard";

const FlashSales = () => {
  const [showAll, setShowAll] = useState(false);

  // Sample products array
  const products = [...Array(10)]; // Simulating 10 products

  // Toggle function for "View All" button
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="mt-8 lg:mx-24">
      {/* Header */}
      <div className="flex flex-col items-start ml-5">
        <div className="flex gap-3">
          <div className="bg-red-500 text-red-500 text-sm font-semibold px-1 py-1 rounded-md inline-block">
            a
          </div>
          <h1 className="text-red-500 font-semibold">Today's</h1>
        </div>
        <h1 className="text-3xl font-bold mt-2 text-center sm:text-left">
          Flash Sales
        </h1>
      </div>

      {/* Products Flexbox */}
      <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap gap-6 mt-4">
        {(showAll ? products : products.slice(0, 4)).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-6">
        <button
          className="bg-red-500  text-white font-semibold py-2 px-4 rounded-sm transition duration-300 hover:bg-red-600"
          onClick={toggleShowAll}
        >
          {showAll ? "Show Less" : "View All Products"}
        </button>
      </div>
    </div>
  );
};

export default FlashSales;
