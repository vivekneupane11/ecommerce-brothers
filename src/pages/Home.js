import React from "react";
import FlashSales from "../components/HomePageComp/FlashSalesComp/FlashSales";
import BrowseByCategory from "./../components/HomePageComp/BrowserCategoryComp/BrowseByCategory";

const Home = () => {
  return (
    <div>
      <FlashSales />
      <BrowseByCategory />
    </div>
  );
};

export default Home;
