import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fireDB } from "./../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const FlashSales = () => {
  const [showAll, setShowAll] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  // Fetch product data from Firestore and cache it
  useEffect(() => {
    const fetchProducts = async () => {
      // Check if products are already cached
      const cachedProducts = localStorage.getItem("flashsales");

      if (cachedProducts) {
        setProducts(JSON.parse(cachedProducts)); // Use cached data
        setLoading(false); // Set loading to false as data is ready
      } else {
        try {
          const querySnapshot = await getDocs(collection(fireDB, "flashsales"));
          const productList = [];
          querySnapshot.forEach((doc) => {
            productList.push({ id: doc.id, ...doc.data() });
          });
          setProducts(productList);
          localStorage.setItem("flashsales", JSON.stringify(productList)); // Cache the data
          setLoading(false); // Set loading to false once data is fetched
        } catch (error) {
          console.error("Error fetching products: ", error);
          setLoading(false); // Set loading to false even if there is an error
        }
      }
    };

    fetchProducts();
  }, []);

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

      {/* Loading Indicator */}
      {loading ? (
        <div className="flex justify-center mt-6">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid"></div>
        </div>
      ) : (
        <>
          {/* Products Flexbox */}
          <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap gap-6 mt-4">
            {(showAll ? products : products.slice(0, 4)).map((product) => (
              <ProductCard key={product.id} product={product} />
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
        </>
      )}
    </div>
  );
};

export default FlashSales;
