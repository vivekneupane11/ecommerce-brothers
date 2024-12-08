import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useInView } from "react-intersection-observer";

const ProductCard = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="relative rounded-lg shadow-md hover:shadow-lg bg-white w-[250px] h-[350px]">
      <div className="bg-[#F5F5F5] relative group">
        {/* Discount Badge */}
        {product.discount && (
          <div className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded w-12 absolute top-2 left-2">
            -{product.discount}%
          </div>
        )}
        {/* New Badge */}
        {product.new && (
          <div className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded w-12 absolute top-2 left-2">
            NEW
          </div>
        )}
        {/* Image Section */}
        <div className="p-8">
          <img
            ref={ref} // Hook the image element to the inView observer
            src={isVisible ? product.image : ""}
            alt={product.title}
            className="w-full h-40 object-contain"
            loading="lazy"
          />
          {/* Favorite and View Icons */}
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <button className="p-2 bg-white rounded-full hover:text-red-500">
              <AiOutlineHeart className="text-black-500 text-lg" />
            </button>
            <button className="p-2 bg-white rounded-full hover:text-red-500">
              <AiOutlineEye className="text-black-500 text-lg" />
            </button>
          </div>
          {/* Add to Cart Button */}
          <button
            onClick={handleViewDetails}
            className="absolute bottom-0 left-0 text-white font-semibold bg-black w-full h-10 hidden group-hover:flex items-center justify-center transition-all duration-300 ease-in-out transform group-hover:translate-y-0 opacity-100 group-hover:opacity-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {/* Product Details */}
      <div className="mt-6 pl-4">
        <h3 className="mt-4 text-md font-semibold text-gray-800">
          {product.title}
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-red-500 text-md font-bold">
            ${product.price}
          </span>
          {product.oldPrice && (
            <span className="ml-2 text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          )}
        </div>
        {/* Ratings */}
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            {[...Array(Math.floor(product.rating))].map((_, i) => (
              <FaStar key={i} />
            ))}
            {product.rating % 1 >= 0.5 && <FaStarHalfAlt />}
          </div>
          <span className="ml-2 text-gray-500">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
