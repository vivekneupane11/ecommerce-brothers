import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Carousel from "../FlashSalesComp/Carousel";
import { fireDB } from "../../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router";

const ProductsComp = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const cachedProducts = sessionStorage.getItem("products");

      if (cachedProducts) {
        setProducts(JSON.parse(cachedProducts));
        setLoading(false);
      } else {
        try {
          const querySnapshot = await getDocs(collection(fireDB, "products"));
          const productList = [];
          querySnapshot.forEach((doc) => {
            productList.push({ id: doc.id, ...doc.data() });
          });
          setProducts(productList);
          sessionStorage.setItem("products", JSON.stringify(productList));
          setLoading(false);
        } catch (error) {
          console.error("Error fetching products: ", error);
          setLoading(false);
        }
      }
    };

    fetchProducts();
  }, []);

  const goToAllProducts = () => {
    navigate("/allproducts");
  };
  return (
    <div className="mt-8 lg:mx-24">
      <div className="flex flex-col items-start ml-5">
        <div className="flex gap-3">
          <div className="bg-red-500 text-red-500 text-sm font-semibold px-1 py-1 rounded-md inline-block">
            a
          </div>
          <h1 className="text-red-500 font-semibold">Our Products</h1>
        </div>
        <h1 className="text-3xl font-bold mt-2 text-center sm:text-left">
          Explore Our Products
        </h1>
      </div>
      {loading ? (
        <div className="flex justify-center mt-6">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid"></div>
        </div>
      ) : products.length === 0 ? (
        <p className="text-center mt-6 text-red-500 font-semibold">
          No products available at the moment.
        </p>
      ) : (
        <Carousel products={products} />
      )}
      <div className="flex justify-center mt-6">
        <button
          onClick={goToAllProducts}
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded-sm transition duration-300 hover:bg-red-600"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductsComp;
