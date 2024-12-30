import { AnimatePresence, motion } from "framer-motion";
import React, { Suspense, useState } from "react";
import { FaBatteryFull, FaBolt, FaDatabase, FaEnvelope, FaFacebook, FaInstagram, FaLaptop, FaMicrochip, FaMobile, FaPhone, FaTablet, FaTwitter, FaWater } from "react-icons/fa";
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

const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does a typical phone repair take?",
      answer: "Most common repairs like screen replacements or battery changes can be completed within 1-2 hours. More complex repairs might take 24-48 hours. We'll provide you with an accurate timeframe after diagnosing your device."
    },
    {
      question: "Do you offer warranty on repairs?",
      answer: "Yes, we provide a 6-month warranty on all parts and repairs. If you experience any issues related to our repair work during this period, we'll fix it free of charge."
    },
    {
      question: "What happens if my data is lost during repair?",
      answer: "We take extensive precautions to protect your data during repairs. However, we always recommend backing up your device before any repair work. We also offer data recovery services if needed."
    },
    {
      question: "Do you use original parts for repairs?",
      answer: "We use high-quality OEM (Original Equipment Manufacturer) parts that match the specifications of your device. We can also source genuine parts if specifically requested, though this may affect the repair cost."
    },
    {
      question: "What if my phone has water damage?",
      answer: "Our technicians are trained in water damage repair. The success rate depends on how quickly you bring in the device and the extent of damage. We recommend turning off the device immediately and bringing it to us as soon as possible."
    }
  ];

  return (
    <motion.div 
      className="mt-24 lg:mx-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollVariants}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
        <p className="mt-4 text-gray-600">Find answers to common questions about our mobile repair services</p>
      </div>

      <div className="space-y-4 px-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full p-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-500"
              >
                ▼
              </motion.span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t"
                >
                  <p className="p-4 text-gray-600 bg-gray-50">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Footer = () => {
  const repairServices = [
    { icon: <FaMobile />, title: "Mobile Repair" },
    { icon: <FaTablet />, title: "Tablet Repair" },
    { icon: <FaLaptop />, title: "Laptop Repair" },
    { icon: <FaBatteryFull />, title: "Battery Service" },
    { icon: <FaWater />, title: "Water Damage" },
    { icon: <FaMicrochip />, title: "Board Repair" },
    { icon: <FaDatabase />, title: "Data Recovery" },
    { icon: <FaBolt />, title: "Charging Issues" }
  ];

  return (
    <motion.footer 
      className="bg-gray-900 text-gray-300 pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scrollVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-lime-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-lime-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-lime-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-lime-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <div className="grid grid-cols-2 gap-2">
              {repairServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-lime-500">{service.icon}</span>
                  <span>{service.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-gray-800 w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-800 w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>
              <textarea
                placeholder="Message"
                rows="4"
                className="bg-gray-800 w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
              ></textarea>
              <button className="bg-lime-500 text-white px-6 py-2 rounded hover:bg-lime-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-2xl hover:text-lime-500 transition-colors"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-lime-500 transition-colors"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-lime-500 transition-colors"><FaInstagram /></a>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-lime-500" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-lime-500" />
                <span>contact@mobilerepair.com</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>&copy; 2023 Mobile Repair. All rights reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

const Home = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollVariants}
      >
        <PromoPage />
      </motion.div>

      <Suspense fallback={<Loader />}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
        >
          <BrowseByCategory />
        </motion.div>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
        >
          <BestSelling />
        </motion.div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
        >
          <ProductsComp />
        </motion.div>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
        >
          <MiddleBanner />
        </motion.div>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
        >
          <FlashSales />
        </motion.div>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
        >
          <NewArrival />
        </motion.div>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
        >
          <BottomComp />
        </motion.div>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;
