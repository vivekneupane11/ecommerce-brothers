import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Carousel from "../FlashSalesComp/Carousel";
import { fireDB } from "../../../firebase/firebase";
import { fetchProducts } from "../../../utilities/fetchProducts";
import Header from "./../FlashSalesComp/Header";
import Loader from "./../FlashSalesComp/Loader";
import ViewAllButton from "./../FlashSalesComp/ViewAllButton";

const ProductsComp = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const documentName = "products";

  useEffect(() => {
    const cachedProducts = localStorage.getItem(documentName);

    if (cachedProducts) {
      setProducts(JSON.parse(cachedProducts));
      setLoading(false);
    } else {
      fetchProducts(fireDB, setProducts, setLoading, documentName);
    }
  }, []);

  return (
    <div className="mt-8 lg:mx-24">
      <Header data1="Our Products" data2="Explore Our Products" />
      {loading ? (
        <Loader />
      ) : products.length === 0 ? (
        <p className="text-center mt-6 text-red-500 font-semibold">
          No products available at the moment.
        </p>
      ) : (
        <Carousel products={products} />
      )}
      <ViewAllButton />
    </div>
  );
};

export default ProductsComp;
