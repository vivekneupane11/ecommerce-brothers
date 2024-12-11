import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/HomePageComp/FlashSalesComp/ProductCard";
import { addToCart } from "../redux/cartSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleAddAllToCart = () => {
    wishlistItems.forEach((product) => {
      dispatch(addToCart({ ...product, quantity: 1 })); // Adjust the quantity as needed
    });
  };

  return (
    <div className="container p-4 lg:mx-24 lg:mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Wishlist ({wishlistItems.length})</h2>
        {wishlistItems.length > 0 && (
          <button
            onClick={handleAddAllToCart}
            className="text-white lg:mr-14  py-2 px-3 rounded-lg border-2 border-transparent bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Move to Bag
          </button>
        )}
      </div>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="flex flex-wrap -mx-2">
          {wishlistItems.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4 flex-shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
