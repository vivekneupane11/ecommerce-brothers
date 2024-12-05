import React from "react";
import FlashSales from "../components/HomePageComp/FlashSalesComp/FlashSales";
import BrowseByCategory from "./../components/HomePageComp/BrowserCategoryComp/BrowseByCategory";
import BestSelling from "../components/HomePageComp/BestSellingComp/BestSelling";

const Home = () => {
  return (
    <div>
      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
    </div>
  );
};

export default Home;
