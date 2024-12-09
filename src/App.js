import React, { Suspense } from "react";
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Loader from "./components/HomePageComp/FlashSalesComp/Loader";
import CartPage from "./pages/cartPage";
import CheckoutPage from "./pages/checkoutPage";
const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const About = React.lazy(() => import("./pages/About"));
const Login = React.lazy(() => import("./pages/Login"));
const PrivateRoute = React.lazy(() => import("./components/PrivateRoute"));
const Account = React.lazy(() => import("./pages/Account"));
const AllProduct = React.lazy(() =>
  import("./components/AllProductsComp/AllProduct")
);
const ProductDetails = React.lazy(() =>
  import("./components/ProductDetailsComp/ProductDetails")
);

const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/allproducts" element={<AllProduct />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/account"
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
