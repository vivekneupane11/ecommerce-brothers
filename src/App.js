import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import Loader from "./components/HomePageComp/FlashSalesComp/Loader";
import Navbar from "./components/NavBar";
import CartPage from "./pages/cartPage";
import CheckoutPage from "./pages/checkoutPage";
import Service from "./pages/Service";
import Wishlist from "./pages/WishList";
const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const About = React.lazy(() => import("./pages/About"));
const PrivateRoute = React.lazy(() => import("./components/PrivateRoute"));
const Account = React.lazy(() => import("./pages/Account"));
const AllProduct = React.lazy(() =>
  import("./components/AllProductsComp/AllProduct")
);
const ProductDetails = React.lazy(() =>
  import("./components/ProductDetailsComp/ProductDetails")
);
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap elements at index i and randomIndex
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
const App = () => {
  useEffect(()=>{
    localStorage.setItem('products',JSON.stringify([
      {
        "id": "sr001",
        "title": "iPhone Screen Replacement Service",
        "category": "Screen Repair",
        "price": 129.99,
        "oldPrice": 149.99,
        "rating": 4.7,
        "reviews": 125,
        "description": "Professional screen replacement service for iPhone models. Includes free diagnostics.",
        "image": "https://iphonespecialist.co.uk/wp-content/uploads/2022/10/iPhone-14-Pro-Max-Screen-Repair.jpg",
        "new": true,
        "discount": 13
      },
      {
        "id": "sr002",
        "title": "Samsung Galaxy Screen Repair",
        "category": "Screen Repair",
        "price": 99.99,
        "oldPrice": 119.99,
        "rating": 4.5,
        "reviews": 89,
        "description": "Fast and reliable screen repair service for Samsung Galaxy models.",
        "image": "https://phone-repairs-perth.com.au/wp-content/uploads/2023/05/S23-Plus-Repairs.jpg",
        "new": false,
        "discount": 17
      },
      {
        "id": "br001",
        "title": "iPhone Battery Replacement",
        "category": "Battery Repair",
        "price": 79.99,
        "oldPrice": 99.99,
        "rating": 4.8,
        "reviews": 200,
        "description": "High-quality battery replacement service for iPhone. Quick turnaround time.",
        "image": "https://phonerepairs2u.com.au/wp-content/uploads/2021/01/iphone_battery.jpg",
        "new": false,
        "discount": 20
      },
      {
        "id": "br002",
        "title": "Samsung Galaxy Battery Repair",
        "category": "Battery Repair",
        "price": 69.99,
        "oldPrice": 89.99,
        "rating": 4.6,
        "reviews": 150,
        "description": "Genuine Samsung batteries used for long-lasting performance.",
        "image": "https://www.batteriesplus.com/49ba52/globalassets/aaa-catalog-pages/services/cell-phone-repair---samsung/new/samsung-battery.jpg",
        "new": true,
        "discount": 22
      },
      {
        "id": "mb001",
        "title": "iPhone 14 Pro Max",
        "category": "Mobile",
        "price": 1099.99,
        "oldPrice": 1199.99,
        "rating": 4.9,
        "reviews": 350,
        "description": "The latest iPhone with advanced features and an A16 Bionic chip.",
        "image": "https://cdn.dxomark.com/wp-content/uploads/medias/post-126771/Apple-iPhone-14-Pro_FINAL_featured-image-packshot-review-1.jpg",
        "new": true,
        "discount": 8
      },
      {
        "id": "mb002",
        "title": "Samsung Galaxy S23 Ultra",
        "category": "Mobile",
        "price": 1199.99,
        "oldPrice": 1299.99,
        "rating": 4.8,
        "reviews": 300,
        "description": "Top-tier Samsung flagship phone with stunning display and camera.",
        "image": "https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg",
        "new": true,
        "discount": 7
      },
      {
        "id": "tb001",
        "title": "iPad Pro 12.9-inch (2023)",
        "category": "Tablets",
        "price": 999.99,
        "oldPrice": null,
        "rating": 4.9,
        "reviews": 250,
        "description": "Professional-grade tablet with M2 chip and Liquid Retina XDR display.",
        "image": "https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-pro-spring21_lp_04202021.jpg.news_app_ed.jpg",
        "new": true
      },
      {
        "id": "tb002",
        "title": "Samsung Galaxy Tab S9 Ultra",
        "category": "Tablets",
        "price": 899.99,
        "oldPrice": 999.99,
        "rating": 4.7,
        "reviews": 180,
        "description": "High-performance Android tablet with a vibrant AMOLED display.",
        "image": "https://media.cnn.com/api/v1/images/stellar/prod/img-5825.jpg?q=h_2267,w_4030,x_0,y_0",
        "new": false,
        "discount": 10
      },
      {
        "id": "ac001",
        "title": "Tempered Glass Screen Protector (Universal)",
        "category": "Accessories",
        "price": 9.99,
        "oldPrice": 14.99,
        "rating": 4.4,
        "reviews": 100,
        "description": "Durable and clear screen protector compatible with most smartphones.",
        "image": "https://media.istockphoto.com/id/1049797956/vector/screen-protector-glass-vector-illustration-of-transparent-tempered-glass-shield-for-mobile.jpg?s=612x612&w=0&k=20&c=_4owySocZyWmYtgxdzRWmL0e48rBHaDiimcE438LeB8=",
        "new": false,
        "discount": 33
      },
      {
        "id": "ac002",
        "title": "USB-C Fast Charging Cable",
        "category": "Accessories",
        "price": 12.99,
        "oldPrice": 19.99,
        "rating": 4.6,
        "reviews": 75,
        "description": "High-speed USB-C charging cable compatible with most devices.",
        "image": "https://cdn-shop.adafruit.com/970x728/4199-01.jpg",
        "new": true,
        "discount": 35
      }
    ]
    ))

    localStorage.setItem('flashsales',JSON.stringify(
      [
      {
        "id": "sr001",
        "title": "iPhone Screen Replacement Service",
        "category": "Screen Repair",
        "price": 129.99,
        "oldPrice": 149.99,
        "rating": 4.7,
        "reviews": 125,
        "description": "Professional screen replacement service for iPhone models. Includes free diagnostics.",
        "image": "https://iphonespecialist.co.uk/wp-content/uploads/2022/10/iPhone-14-Pro-Max-Screen-Repair.jpg",
        "new": true,
        "discount": 13
      },
      {
        "id": "sr002",
        "title": "Samsung Galaxy Screen Repair",
        "category": "Screen Repair",
        "price": 99.99,
        "oldPrice": 119.99,
        "rating": 4.5,
        "reviews": 89,
        "description": "Fast and reliable screen repair service for Samsung Galaxy models.",
        "image": "https://phone-repairs-perth.com.au/wp-content/uploads/2023/05/S23-Plus-Repairs.jpg",
        "new": false,
        "discount": 17
      },
      {
        "id": "br001",
        "title": "iPhone Battery Replacement",
        "category": "Battery Repair",
        "price": 79.99,
        "oldPrice": 99.99,
        "rating": 4.8,
        "reviews": 200,
        "description": "High-quality battery replacement service for iPhone. Quick turnaround time.",
        "image": "https://phonerepairs2u.com.au/wp-content/uploads/2021/01/iphone_battery.jpg",
        "new": false,
        "discount": 20
      },
      {
        "id": "br002",
        "title": "Samsung Galaxy Battery Repair",
        "category": "Battery Repair",
        "price": 69.99,
        "oldPrice": 89.99,
        "rating": 4.6,
        "reviews": 150,
        "description": "Genuine Samsung batteries used for long-lasting performance.",
        "image": "https://www.batteriesplus.com/49ba52/globalassets/aaa-catalog-pages/services/cell-phone-repair---samsung/new/samsung-battery.jpg",
        "new": true,
        "discount": 22
      },
      {
        "id": "mb001",
        "title": "iPhone 14 Pro Max",
        "category": "Mobile",
        "price": 1099.99,
        "oldPrice": 1199.99,
        "rating": 4.9,
        "reviews": 350,
        "description": "The latest iPhone with advanced features and an A16 Bionic chip.",
        "image": "https://cdn.dxomark.com/wp-content/uploads/medias/post-126771/Apple-iPhone-14-Pro_FINAL_featured-image-packshot-review-1.jpg",
        "new": true,
        "discount": 8
      },
      {
        "id": "mb002",
        "title": "Samsung Galaxy S23 Ultra",
        "category": "Mobile",
        "price": 1199.99,
        "oldPrice": 1299.99,
        "rating": 4.8,
        "reviews": 300,
        "description": "Top-tier Samsung flagship phone with stunning display and camera.",
        "image": "https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg",
        "new": true,
        "discount": 7
      },
      {
        "id": "tb001",
        "title": "iPad Pro 12.9-inch (2023)",
        "category": "Tablets",
        "price": 999.99,
        "oldPrice": null,
        "rating": 4.9,
        "reviews": 250,
        "description": "Professional-grade tablet with M2 chip and Liquid Retina XDR display.",
        "image": "https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-pro-spring21_lp_04202021.jpg.news_app_ed.jpg",
        "new": true
      },
      {
        "id": "tb002",
        "title": "Samsung Galaxy Tab S9 Ultra",
        "category": "Tablets",
        "price": 899.99,
        "oldPrice": 999.99,
        "rating": 4.7,
        "reviews": 180,
        "description": "High-performance Android tablet with a vibrant AMOLED display.",
        "image": "https://media.cnn.com/api/v1/images/stellar/prod/img-5825.jpg?q=h_2267,w_4030,x_0,y_0",
        "new": false,
        "discount": 10
      },
      {
        "id": "ac001",
        "title": "Tempered Glass Screen Protector (Universal)",
        "category": "Accessories",
        "price": 9.99,
        "oldPrice": 14.99,
        "rating": 4.4,
        "reviews": 100,
        "description": "Durable and clear screen protector compatible with most smartphones.",
        "image": "https://media.istockphoto.com/id/1049797956/vector/screen-protector-glass-vector-illustration-of-transparent-tempered-glass-shield-for-mobile.jpg?s=612x612&w=0&k=20&c=_4owySocZyWmYtgxdzRWmL0e48rBHaDiimcE438LeB8=",
        "new": false,
        "discount": 33
      },
      {
        "id": "ac002",
        "title": "USB-C Fast Charging Cable",
        "category": "Accessories",
        "price": 12.99,
        "oldPrice": 19.99,
        "rating": 4.6,
        "reviews": 75,
        "description": "High-speed USB-C charging cable compatible with most devices.",
        "image": "https://cdn-shop.adafruit.com/970x728/4199-01.jpg",
        "new": true,
        "discount": 35
      }
    ].reverse()
    ))


    localStorage.setItem('bestselling',JSON.stringify(
      shuffleArray( 
        [
      {
        "id": "sr001",
        "title": "iPhone Screen Replacement Service",
        "category": "Screen Repair",
        "price": 129.99,
        "oldPrice": 149.99,
        "rating": 4.7,
        "reviews": 125,
        "description": "Professional screen replacement service for iPhone models. Includes free diagnostics.",
        "image": "https://iphonespecialist.co.uk/wp-content/uploads/2022/10/iPhone-14-Pro-Max-Screen-Repair.jpg",
        "new": true,
        "discount": 13
      },
      {
        "id": "sr002",
        "title": "Samsung Galaxy Screen Repair",
        "category": "Screen Repair",
        "price": 99.99,
        "oldPrice": 119.99,
        "rating": 4.5,
        "reviews": 89,
        "description": "Fast and reliable screen repair service for Samsung Galaxy models.",
        "image": "https://phone-repairs-perth.com.au/wp-content/uploads/2023/05/S23-Plus-Repairs.jpg",
        "new": false,
        "discount": 17
      },
      {
        "id": "br001",
        "title": "iPhone Battery Replacement",
        "category": "Battery Repair",
        "price": 79.99,
        "oldPrice": 99.99,
        "rating": 4.8,
        "reviews": 200,
        "description": "High-quality battery replacement service for iPhone. Quick turnaround time.",
        "image": "https://phonerepairs2u.com.au/wp-content/uploads/2021/01/iphone_battery.jpg",
        "new": false,
        "discount": 20
      },
      {
        "id": "br002",
        "title": "Samsung Galaxy Battery Repair",
        "category": "Battery Repair",
        "price": 69.99,
        "oldPrice": 89.99,
        "rating": 4.6,
        "reviews": 150,
        "description": "Genuine Samsung batteries used for long-lasting performance.",
        "image": "https://www.batteriesplus.com/49ba52/globalassets/aaa-catalog-pages/services/cell-phone-repair---samsung/new/samsung-battery.jpg",
        "new": true,
        "discount": 22
      },
      {
        "id": "mb001",
        "title": "iPhone 14 Pro Max",
        "category": "Mobile",
        "price": 1099.99,
        "oldPrice": 1199.99,
        "rating": 4.9,
        "reviews": 350,
        "description": "The latest iPhone with advanced features and an A16 Bionic chip.",
        "image": "https://cdn.dxomark.com/wp-content/uploads/medias/post-126771/Apple-iPhone-14-Pro_FINAL_featured-image-packshot-review-1.jpg",
        "new": true,
        "discount": 8
      },
      {
        "id": "mb002",
        "title": "Samsung Galaxy S23 Ultra",
        "category": "Mobile",
        "price": 1199.99,
        "oldPrice": 1299.99,
        "rating": 4.8,
        "reviews": 300,
        "description": "Top-tier Samsung flagship phone with stunning display and camera.",
        "image": "https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg",
        "new": true,
        "discount": 7
      },
      {
        "id": "tb001",
        "title": "iPad Pro 12.9-inch (2023)",
        "category": "Tablets",
        "price": 999.99,
        "oldPrice": null,
        "rating": 4.9,
        "reviews": 250,
        "description": "Professional-grade tablet with M2 chip and Liquid Retina XDR display.",
        "image": "https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-pro-spring21_lp_04202021.jpg.news_app_ed.jpg",
        "new": true
      },
      {
        "id": "tb002",
        "title": "Samsung Galaxy Tab S9 Ultra",
        "category": "Tablets",
        "price": 899.99,
        "oldPrice": 999.99,
        "rating": 4.7,
        "reviews": 180,
        "description": "High-performance Android tablet with a vibrant AMOLED display.",
        "image": "https://media.cnn.com/api/v1/images/stellar/prod/img-5825.jpg?q=h_2267,w_4030,x_0,y_0",
        "new": false,
        "discount": 10
      },
      {
        "id": "ac001",
        "title": "Tempered Glass Screen Protector (Universal)",
        "category": "Accessories",
        "price": 9.99,
        "oldPrice": 14.99,
        "rating": 4.4,
        "reviews": 100,
        "description": "Durable and clear screen protector compatible with most smartphones.",
        "image": "https://media.istockphoto.com/id/1049797956/vector/screen-protector-glass-vector-illustration-of-transparent-tempered-glass-shield-for-mobile.jpg?s=612x612&w=0&k=20&c=_4owySocZyWmYtgxdzRWmL0e48rBHaDiimcE438LeB8=",
        "new": false,
        "discount": 33
      },
      {
        "id": "ac002",
        "title": "USB-C Fast Charging Cable",
        "category": "Accessories",
        "price": 12.99,
        "oldPrice": 19.99,
        "rating": 4.6,
        "reviews": 75,
        "description": "High-speed USB-C charging cable compatible with most devices.",
        "image": "https://cdn-shop.adafruit.com/970x728/4199-01.jpg",
        "new": true,
        "discount": 35
      }
    ])
    ))
  },[])
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/allproducts" element={<AllProduct />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/service/:id" element={<Service />} />
          <Route path="/account"
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />
                  <Route path="/" element={<Home />} />

        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
