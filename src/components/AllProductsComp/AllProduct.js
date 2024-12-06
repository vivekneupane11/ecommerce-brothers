import React, { useEffect, useState } from "react";
import ProductCard from "../HomePageComp/FlashSalesComp/ProductCard";

const AllProduct = () => {
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

  return (
    <div>
      <div className="lg:mx-24 md:p-5">
        <h2 className="text-2xl font-bold mb-6">All Collections</h2>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:flex-wrap">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
