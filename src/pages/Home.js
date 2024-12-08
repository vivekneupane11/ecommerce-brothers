import React, { Suspense } from "react";
import Loader from "../components/HomePageComp/FlashSalesComp/Loader";

import PromoPage from "./../components/HomePageComp/PromoComp/PromoPage";

const FlashSales = React.lazy(() =>
  import("../components/HomePageComp/FlashSalesComp/FlashSales")
);
const BrowseByCategory = React.lazy(() =>
  import("../components/HomePageComp/BrowserCategoryComp/BrowseByCategory")
);
const BestSelling = React.lazy(() =>
  import("../components/HomePageComp/BestSellingComp/BestSelling")
);
const MiddleBanner = React.lazy(() =>
  import("../components/HomePageComp/MiddleBannerComp/MiddleBanner")
);
const ProductsComp = React.lazy(() =>
  import("../components/HomePageComp/ProductsComp/ProductsComp")
);
const NewArrival = React.lazy(() =>
  import("../components/HomePageComp/NewArrivalComp/NewArrival")
);
const BottomComp = React.lazy(() =>
  import("../components/HomePageComp/BottomComp/BottomComp")
);

const Home = () => {
  return (
    <div>
      <PromoPage />

      <Suspense fallback={<Loader />}>
        <FlashSales />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <BrowseByCategory />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <BestSelling />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <MiddleBanner />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ProductsComp />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <NewArrival />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <BottomComp />
      </Suspense>
    </div>
  );
};

export default Home;
