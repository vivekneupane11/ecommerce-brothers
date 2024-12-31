import { AnimatePresence, motion } from "framer-motion";
import React, { Suspense, useState } from 'react';
import { FaBatteryFull, FaBolt, FaDatabase, FaEnvelope, FaFacebook, FaInstagram, FaLaptop, FaMicrochip, FaMobile, FaPhone, FaTablet, FaTools, FaTwitter, FaWater, FaWhatsapp } from 'react-icons/fa';
import { useParams } from 'react-router';

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

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+61426257977', '_blank');
  };

  return (
    <div 
      className="fixed bottom-8 right-8 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-3 whitespace-nowrap"
          >
            <p className="text-gray-800 text-sm">Chat with us on WhatsApp!</p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-200 flex items-center justify-center"
      >
        <FaWhatsapp className="text-2xl" />
      </button>
    </div>
  );
};

const menuItems = {
  phones: [
    {id: "sr001", name: "iPhone 14 Pro Max"},
    {id: "sr002", name: "iPhone 13"},
    {id: "sr003", name: "Samsung Galaxy S23"},
    {id: "sr004", name: "Google Pixel 7"},
    {id: "sr005", name: "OnePlus 11"},
    {id: "sr006", name: "Xiaomi 13 Pro"},
    {id: "sr007", name: "Samsung Galaxy A54"},
    {id: "sr008", name: "iPhone 12"},
    {id: "sr009", name: "Samsung Galaxy Z Fold 4"},
    {id: "sr010", name: "Google Pixel 6a"}
  ],
  ipads: [
    {id: "tr001", name: "iPad Pro 12.9"},
    {id: "tr002", name: "iPad Air 5"},
    {id: "tr003", name: "iPad mini 6"},
    {id: "tr004", name: "iPad 10th gen"},
    {id: "tr005", name: "iPad Pro 11"},
    {id: "tr006", name: "iPad Air 4"},
    {id: "tr007", name: "iPad 9th gen"},
    {id: "tr008", name: "iPad Pro 2021"},
    {id: "tr009", name: "iPad Air 3"},
    {id: "tr010", name: "iPad mini 5"}
  ],
  laptops: [
    {id: "lr001", name: "MacBook Pro 16"},
    {id: "lr002", name: "MacBook Air M2"},
    {id: "lr003", name: "Dell XPS 15"},
    {id: "lr004", name: "Lenovo ThinkPad X1"},
    {id: "lr005", name: "HP Spectre x360"},
    {id: "lr006", name: "ASUS ROG Zephyrus"},
    {id: "lr007", name: "Acer Swift 5"},
    {id: "lr008", name: "Microsoft Surface Laptop"},
    {id: "lr009", name: "Razer Blade 15"},
    {id: "lr010", name: "MSI GS66 Stealth"}
  ],
  dataRecovery: [
    {id: "dr001", name: "Hard Drive Recovery"},
    {id: "dr002", name: "SSD Data Recovery"},
    {id: "dr003", name: "iPhone Data Recovery"},
    {id: "dr004", name: "iPad Data Recovery"},
    {id: "dr005", name: "Android Data Recovery"},
    {id: "dr006", name: "USB Drive Recovery"},
    {id: "dr007", name: "SD Card Recovery"},
    {id: "dr008", name: "RAID Recovery"},
    {id: "dr009", name: "Laptop Data Recovery"},
    {id: "dr010", name: "Water Damage Recovery"}
  ]
};

export default function Service() {
  const { id } = useParams()

  const services = {
    // Phone Services
    ...Object.fromEntries(menuItems.phones.map(phone => [
      phone.id,
      {
        device: phone.name,
        category: "Phone",
        services: [
          {
            title: "Screen Replacement",
            description: "Premium quality OLED screen replacement with True Tone functionality. We use only the highest grade OLED panels that maintain color accuracy and brightness. Our technicians carefully calibrate the display to ensure perfect touch response and Face ID functionality.",
            icon: <FaTools className="text-yellow-500" />
          },
          {
            title: "Battery Replacement",
            description: "Restore your phone's battery life with genuine high-capacity batteries. We test battery health before and after replacement, ensure proper adhesive sealing, and calibrate the battery for optimal performance.", 
            icon: <FaBatteryFull className="text-yellow-500" />
          },
          {
            title: "Water Damage Repair",
            description: "Comprehensive water damage treatment including ultrasonic cleaning, component inspection, corrosion removal, and board-level repairs. We use specialized equipment to dry and treat affected areas.",
            icon: <FaWater className="text-yellow-500" />
          },
          {
            title: "Charging Port Repair", 
            description: "Complete charging system diagnosis and repair. We clean and repair charging ports, replace damaged flex cables, and ensure fast charging compatibility.",
            icon: <FaBolt className="text-yellow-500" />
          },
          {
            title: "Logic Board Repair",
            description: "Expert microsoldering and component-level board repairs. We fix boot issues, perform chip replacements, and repair short circuits using state-of-the-art diagnostic tools.",
            icon: <FaMicrochip className="text-yellow-500" />
          }
        ]
      }
    ])),

    // Tablet Services
    ...Object.fromEntries(menuItems.ipads.map(ipad => [
      ipad.id,
      {
        device: ipad.name,
        category: "Tablet",
        services: [
          {
            title: "Screen Replacement",
            description: "Premium quality LCD screen replacement with True Tone functionality. We use only genuine Apple displays that maintain color accuracy and brightness. Our technicians carefully calibrate the display to ensure perfect touch response.",
            icon: <FaTools className="text-yellow-500" />
          },
          {
            title: "Battery Replacement",
            description: "Restore your iPad's battery life with genuine Apple batteries. We test battery health before and after replacement, ensure proper adhesive sealing, and calibrate the battery for optimal performance.",
            icon: <FaBatteryFull className="text-yellow-500" />
          },
          {
            title: "Water Damage Repair",
            description: "Comprehensive water damage treatment including ultrasonic cleaning, component inspection, corrosion removal, and board-level repairs. We use specialized equipment to dry and treat affected areas.",
            icon: <FaWater className="text-yellow-500" />
          },
          {
            title: "Charging Port Repair",
            description: "Complete charging system diagnosis and repair. We clean and repair charging ports, replace damaged flex cables, and ensure fast charging compatibility.",
            icon: <FaBolt className="text-yellow-500" />
          },
          {
            title: "Logic Board Repair",
            description: "Expert microsoldering and component-level board repairs. We fix boot issues, perform chip replacements, and repair short circuits using state-of-the-art diagnostic tools.",
            icon: <FaMicrochip className="text-yellow-500" />
          }
        ]
      }
    ])),

    // Laptop Services
    ...Object.fromEntries(menuItems.laptops.map(laptop => [
      laptop.id,
      {
        device: laptop.name,
        category: "Laptop",
        services: [
          {
            title: "Screen Replacement",
            description: "Premium quality display replacement. We use only high-quality displays that maintain color accuracy and brightness. Our technicians carefully calibrate the display to ensure perfect color reproduction.",
            icon: <FaTools className="text-yellow-500" />
          },
          {
            title: "Battery Replacement",
            description: "Restore your laptop's battery life with genuine batteries. We test battery health before and after replacement, ensure proper adhesive sealing, and calibrate the battery for optimal performance.",
            icon: <FaBatteryFull className="text-yellow-500" />
          },
          {
            title: "Water Damage Repair",
            description: "Comprehensive water damage treatment including ultrasonic cleaning, component inspection, corrosion removal, and board-level repairs. We use specialized equipment to dry and treat affected areas.",
            icon: <FaWater className="text-yellow-500" />
          },
          {
            title: "Charging Port Repair",
            description: "Complete charging system diagnosis and repair. We clean and repair charging ports, replace damaged power boards, and ensure proper charging functionality.",
            icon: <FaBolt className="text-yellow-500" />
          },
          {
            title: "Logic Board Repair",
            description: "Expert microsoldering and component-level board repairs. We fix boot issues, perform chip replacements, and repair short circuits using state-of-the-art diagnostic tools.",
            icon: <FaMicrochip className="text-yellow-500" />
          }
        ]
      }
    ])),

    // Data Recovery Services
    ...Object.fromEntries(menuItems.dataRecovery.map(recovery => [
      recovery.id,
      {
        device: recovery.name,
        category: "Data Recovery",
        services: [
          {
            title: "Diagnostic Assessment",
            description: "Comprehensive evaluation of drive condition using specialized tools. We identify physical damage, logical errors, and determine the best recovery approach.",
            icon: <FaTools className="text-yellow-500" />
          },
          {
            title: "Physical Recovery",
            description: "Recovery from physically damaged drives including head crashes, motor failure, and platter damage. We use clean room facilities for sensitive operations.",
            icon: <FaBatteryFull className="text-yellow-500" />
          },
          {
            title: "Logical Recovery",
            description: "Recovery from formatting, partition loss, file system corruption, and deleted files. We use advanced software tools to rebuild file structures.",
            icon: <FaWater className="text-yellow-500" />
          },
          {
            title: "Emergency Recovery",
            description: "Priority service for time-critical recoveries. We work around the clock to recover your important data as quickly as possible.",
            icon: <FaBolt className="text-yellow-500" />
          },
          {
            title: "Secure Data Transfer",
            description: "Safe transfer of recovered data to new storage media. We provide detailed file listings and verify data integrity after transfer.",
            icon: <FaMicrochip className="text-yellow-500" />
          }
        ]
      }
    ]))
  }

  const serviceData = services[id]

  if (!serviceData) {
    return <div className="text-center py-12">Service not found</div>
  }

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
    <>
      <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
        <motion.h1 
          className="text-4xl font-bold text-center mb-4"
          initial="hidden"
          animate="visible"
          variants={scrollVariants}
        >
          {serviceData.device} Repair Services
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={scrollVariants}
        >
          Professional repairs with lifetime warranty and same-day service
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              initial="hidden"
              animate="visible"
              variants={scrollVariants}
            >
              <div className="text-4xl mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center bg-white p-8 rounded-xl shadow-lg"
          initial="hidden"
          animate="visible"
          variants={scrollVariants}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Choose Us?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            All repairs come with a lifetime warranty and are performed by certified technicians using premium quality parts. We offer free diagnostics and same-day repair services for most issues.
          </p>
          <button className="bg-yellow-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl">
            Schedule Your Repair
          </button>
        </motion.div>
      </div>

      <FloatingWhatsApp />

      <Suspense fallback={<div>Loading...</div>}>
        <MiddleBanner />
        <NewArrival />
        <BestSelling />
        <ProductsComp />
      </Suspense>

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
                <li><a href="/" className="hover:text-lime-500 transition-colors">Home</a></li>
                <li><a href="/" className="hover:text-lime-500 transition-colors">About Us</a></li>
                <li><a href="/" className="hover:text-lime-500 transition-colors">Services</a></li>
                <li><a href="/" className="hover:text-lime-500 transition-colors">Contact</a></li>
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
                <a href="https://facebook.com" className="text-2xl hover:text-lime-500 transition-colors"><FaFacebook /></a>
                <a href="https://twitter.com" className="text-2xl hover:text-lime-500 transition-colors"><FaTwitter /></a>
                <a href="https://instagram.com" className="text-2xl hover:text-lime-500 transition-colors"><FaInstagram /></a>
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
    </>
  )
}
