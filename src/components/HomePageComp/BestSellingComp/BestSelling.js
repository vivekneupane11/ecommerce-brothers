import React, { useEffect, useState } from "react";
import { fireDB } from "../../../firebase/firebase";
import Carousel from "../FlashSalesComp/Carousel";

import { fetchProducts } from "../../../utilities/fetchProducts";
import Header from "./../FlashSalesComp/Header";
import ViewAllButton from "./../FlashSalesComp/ViewAllButton";
import Loader from './../FlashSalesComp/Loader';

const BestSelling = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const documentName = "bestselling";

  useEffect(() => {
    const cachedProducts = sessionStorage.getItem(documentName);

    if (cachedProducts) {
      setProducts(JSON.parse(cachedProducts));
      setLoading(false);
    } else {
      fetchProducts(fireDB, setProducts, setLoading, documentName);
    }
  }, []);

  return (
    <div className="mt-8 lg:mx-24">
      <Header data1="This Month" data2="Best Selling Products" />

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

export default BestSelling;
