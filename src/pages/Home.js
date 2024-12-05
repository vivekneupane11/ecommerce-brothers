import React from "react";
import FlashSales from "../components/HomePageComp/FlashSalesComp/FlashSales";
import BrowseByCategory from "./../components/HomePageComp/BrowserCategoryComp/BrowseByCategory";
import BestSelling from "../components/HomePageComp/BestSellingComp/BestSelling";
import ProductsComp from "../components/HomePageComp/ProductsComp/ProductsComp";
import PromoPage from "../components/HomePageComp/PromoComp/PromoPage";
import MiddleBanner from "../components/HomePageComp/MiddleBannerComp/MiddleBanner";
import NewArrival from "../components/HomePageComp/NewArrivalComp/NewArrival";

const Home = () => {
  return (
    <div>
      <PromoPage />
      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
      <MiddleBanner />
      <ProductsComp />
      <NewArrival />
    </div>
  );
};

export default Home;
