import React, { useEffect, useState } from "react";
import { fireDB } from "../../../firebase/firebase";
import Carousel from "./Carousel";

import { fetchProducts } from "../../../utilities/fetchProducts";
import Header from "./Header";
import Loader from "./Loader";
import ViewAllButton from "./ViewAllButton";

const FlashSales = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const documentName = "flashsales";

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
      <Header data1="Today's" data2="Flash Sales" />

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

export default FlashSales;
