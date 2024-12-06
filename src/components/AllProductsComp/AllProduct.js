import React, { useEffect, useState } from "react";
import ProductCard from "../HomePageComp/FlashSalesComp/ProductCard";
import CategoryFilter from "./CategoryFilter";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

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

  useEffect(() => {
    // Filter products based on selected categories
    if (selectedCategories.length === 0 || selectedCategories.includes("all")) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        selectedCategories.includes(product.category.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategories, products]);

  return (
    <div>
      <div className="lg:mx-24 flex flex-col md:flex-row ">
        <div>
          <div className="flex flex-col items-start ml-5 mt-8">
            <div className="flex gap-3">
              <div className="bg-red-500 text-red-500 text-sm font-semibold px-1 py-1 rounded-md inline-block">
                a
              </div>
              <h1 className="text-red-500 font-semibold text-xl sm:text-2xl">
                All Products
              </h1>
            </div>
          </div>

          {/* Category Filter */}
          <CategoryFilter
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>

        <div className="flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:p-10 md:ml-5 md:items-center md:justify-center ">
          {filteredProducts.map((product) => (
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
