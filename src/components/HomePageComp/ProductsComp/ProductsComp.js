import React from "react";
import { FaCheckCircle, FaClock, FaHandshake, FaMoneyBillWave, FaStar, FaTools, FaUserShield } from "react-icons/fa";

const ProductsComp = () => {
  const features = [
    {
      icon: <FaUserShield className="text-4xl text-lime-500" />,
      title: "6-Month Warranty",
      description: "Peace of mind with our comprehensive warranty on parts and repairs"
    },
    {
      icon: <FaTools className="text-4xl text-lime-500" />,
      title: "Expert Technicians", 
      description: "Highly skilled team with 22+ years of repair experience"
    },
    {
      icon: <FaClock className="text-4xl text-lime-500" />,
      title: "Quick Service",
      description: "Fast and efficient repairs to get you back up and running"
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-lime-500" />,
      title: "Affordable Pricing",
      description: "Competitive rates without compromising on quality"
    },
    {
      icon: <FaHandshake className="text-4xl text-lime-500" />,
      title: "Customer Satisfaction",
      description: "22 years of dedicated service and happy customers"
    },
    {
      icon: <FaCheckCircle className="text-4xl text-lime-500" />,
      title: "Reliable Service",
      description: "Trusted repairs with guaranteed workmanship"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Incredible service! They fixed my iPhone screen in just an hour and the quality is perfect. The staff was very professional and friendly. Highly recommend!",
      date: "July 2023"
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Had my MacBook repaired here and I'm extremely satisfied. The technicians are knowledgeable and the price was very reasonable. Will definitely come back!",
      date: "August 2023"
    },
    {
      name: "Emma Williams",
      rating: 5,
      comment: "Outstanding customer service! They recovered all my data from my water-damaged phone. Quick, efficient, and very helpful throughout the process.",
      date: "September 2023"
    }
  ];

  return (
    <div className="mt-16 lg:mx-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto px-4">
          Our services are reliable, affordable, and quick, with a 6-month warranty on parts and repairs. 
          We take pride in our expert technicians who ensure quality repairs, giving you complete peace of mind.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]
            hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center px-4">
        <p className="text-gray-600 max-w-3xl mx-auto">
          While we are known for affordable mobile repairs in Sydney, customer service is our number one priority. 
          We have been dedicated to customers' satisfaction and happiness for the past 22 years and strive to uphold that going forward as well.
        </p>
      </div>

      <div className="mt-40 mb-40">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">What Our Customers Say</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]
              hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow duration-300"
            >
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
                <div className="mt-auto">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsComp;
