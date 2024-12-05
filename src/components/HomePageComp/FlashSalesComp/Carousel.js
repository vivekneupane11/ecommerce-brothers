import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from "./ProductCard";
import "../../../App.css";

const Carousel = ({ products }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative rounded-lg mt-6 pt-10 ml-5 lg:ml-0 ">
      {/* Arrows */}
      <button
        className="absolute right-12 top-0 transform  bg-white hover:bg-red-100 p-2 rounded-full shadow-md z-10"
        onClick={scrollLeft}
      >
        <FaArrowLeft />
      </button>

      <div
        ref={carouselRef}
        className="flex overflow-x-scroll space-x-4 carousel-container"
      >
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-72 p-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <button
        className="absolute right-0 top-0 transform  bg-white hover:bg-red-100 p-2 rounded-full shadow-md z-10"
        onClick={scrollRight}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
