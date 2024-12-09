import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar, FaStarHalfAlt, FaTruck, FaUndo } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addToCart } from "../../redux/cartSlice";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedProducts = sessionStorage.getItem("products");
    const storedFlashSales = sessionStorage.getItem("flashsales");
    const storedBestSelling = sessionStorage.getItem("bestselling");

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
    return <div className="mt-10 text-center">Product not found.</div>;
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4 md:flex-row md:gap-10 lg:gap-24 lg:mx-24 ">
      <div className=" bg-[#F5F5F5]">
        <img
          src={product.image}
          alt={product.title}
          className="w-[500px] h-[300px] object-contain"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-5 md:items-center md:mt-10">
        <h1 className="text-2xl font-bold md:text-3xl">{product.title}</h1>

        <div className="flex flex-col gap-2 text-center md:flex-row md:gap-4">
          <div className="flex items-center gap-1 text-yellow-400">
            {[...Array(Math.floor(product.rating))].map((_, i) => (
              <FaStar key={i} />
            ))}
            {product.rating % 1 >= 0.5 && <FaStarHalfAlt />}
          </div>
          <span className="text-gray-600">({product.reviews} Reviews)</span>
        </div>

        <div className="text-red-500 text-lg flex gap-2">
          ${product.price}
          {product.oldPrice && (
            <span className="text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          )}
        </div>

        <p className="text-gray-600 text-md font-semibold lg:text-lg text-center pb-4 border-b-2">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2 justify-center ">
          <span className="py-2 text-xl">Size:</span>
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className="px-4 py-2 border hover:bg-gray-100 focus:bg-gray-200 focus:outline-none"
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="flex items-center gap-2 border">
            <button
              className="w-10 px-3 py-2 bg-gray-100"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center "
            />
            <button
              className="w-10 px-3 py-2 bg-gray-100"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Add to Cart
            </button>
            <button className="p-2 bg-white hover:text-red-500 border-2">
              <AiOutlineHeart className="text-black-500" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 border p-4 mt-5">
            <FaTruck size={30} className="text-gray-500" />
            <span className="text-sm sm:text-base">
              Free Delivery - Enter your postal code for Delivery Availability
            </span>
          </div>
          <div className="flex items-center gap-2 border p-4">
            <FaUndo size={30} className="text-gray-500" />
            <span className="text-sm sm:text-base">
              Return Delivery - Free 30 Days Delivery Returns. Details
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
