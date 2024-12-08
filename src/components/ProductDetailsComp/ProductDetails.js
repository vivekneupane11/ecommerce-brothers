import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar, FaStarHalfAlt, FaTruck, FaUndo } from "react-icons/fa";
import { useParams } from "react-router";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = sessionStorage.getItem("products");
    const storedFlashSales = sessionStorage.getItem("flashsales");
    const storedBestSelling = sessionStorage.getItem("bestselling");

    // Parse and merge the data
    const allProducts = [
      ...(storedProducts ? JSON.parse(storedProducts) : []),
      ...(storedFlashSales ? JSON.parse(storedFlashSales) : []),
      ...(storedBestSelling ? JSON.parse(storedBestSelling) : []),
    ];

    setProducts(allProducts);
  }, []);

  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="text-center text-gray-600 mt-10">Product not found.</div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap -mx-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 px-6">
          <img
            src={product.image}
            alt={product.title || "Product Image"}
            className="w-full h-auto object-contain border border-gray-200 rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 px-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {product.title}
          </h1>

          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {Array.from({ length: Math.floor(product.rating || 0) }).map(
                (_, i) => (
                  <FaStar key={i} />
                )
              )}
              {product.rating % 1 >= 0.5 && <FaStarHalfAlt />}
            </div>
            <span className="ml-2 text-gray-500">
              ({product.reviews || 0} Reviews)
            </span>
          </div>

          <p className="text-xl font-bold text-red-500 mb-2">
            ${product.price}
          </p>
          {product.oldPrice && (
            <p className="text-gray-400 line-through mb-4">
              ${product.oldPrice}
            </p>
          )}

          <p className="text-gray-600 mb-6">{product.description}</p>

          {product.colors && (
            <div className="flex items-center mb-6">
              <span className="mr-4">Colours:</span>
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border border-gray-300 mr-2"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          )}

          {product.sizes && (
            <div className="flex items-center mb-6">
              <span className="mr-4">Size:</span>
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className="px-3 py-1 border border-gray-300 rounded-lg mr-2 hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center mb-6">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300">
                -
              </button>
              <span className="px-4 py-2">1</span>
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300">
                +
              </button>
            </div>
            <button className="ml-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Buy Now
            </button>
            <button className="ml-4 p-3 border border-gray-300 rounded-lg hover:text-red-500">
              <AiOutlineHeart />
            </button>
          </div>

          <div className="flex items-center mb-4">
            <FaTruck className="text-gray-600 mr-2" />
            <span>
              Free Delivery - Enter your postal code for delivery availability
            </span>
          </div>
          <div className="flex items-center">
            <FaUndo className="text-gray-600 mr-2" />
            <span>Return Delivery - Free 30 Days Delivery Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
