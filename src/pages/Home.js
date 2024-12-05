import React from "react";
import FlashSales from "../components/HomePageComp/FlashSalesComp/FlashSales";
import BrowseByCategory from "./../components/HomePageComp/BrowserCategoryComp/BrowseByCategory";
import BestSelling from "../components/HomePageComp/BestSellingComp/BestSelling";
import ProductsComp from "../components/HomePageComp/ProductsComp/ProductsComp";
import PromoPage from "../components/HomePageComp/PromoComp/PromoPage";

const Home = () => {
  return (
    <div>
      <PromoPage />
      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
      <ProductsComp />
    </div>
  );
};

export default Home;
