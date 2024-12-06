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
      <div className="lg:mx-24 md:p-5 md:flex ">
        <div>
          <h2 className="text-2xl font-bold mb-6">All Collections</h2>

          {/* Category Filter */}
          <CategoryFilter
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:flex-wrap">
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
