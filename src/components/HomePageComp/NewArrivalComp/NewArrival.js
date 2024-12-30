import React from "react";

const NewArrival = () => {
  return (
    <div className="my-24 lg:mx-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Professional Mobile Device Repair Services</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto px-4">
          Expert technicians providing quality repairs for all major mobile device brands
        </p>
      </div>

      <div className="m-5 flex flex-col gap-8 lg:flex-row">
        <div className="lg:w-1/2 pr-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quality Mobile Repairs at Affordable Pricing</h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            There is no denying that our mobile devices are an integral part of everyday life – and that life as usual is disrupted when any of our devices has a problem. At Cheap Mobile Repair, we can help you keep your devices working in the best condition possible.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We are known as a one-stop-shop for addressing all mobile device needs for servicing, repairs and replacements. We can work with most leading brands, including:
          </p>

          <ul className="grid grid-cols-2 gap-2 mb-6 text-gray-600">
            <li>• iPhone</li>
            <li>• Samsung</li>
            <li>• Motorola</li>
            <li>• Sony</li>
            <li>• Nokia</li>
            <li>• HTC</li>
            <li>• OnePlus</li>
            <li>• Xiaomi</li>
            <li>• Oppo</li>
            <li>• LG</li>
          </ul>

          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors">
            Read More
          </button>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-3">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            alt="Professional phone repair service"
            className="h-[400px] w-full object-cover rounded-lg shadow-lg"
            loading="lazy"
          />

          <div className="flex flex-col sm:flex-row gap-3">
            <img
              src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Mobile repair technician at work" 
              className="h-[200px] flex-1 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1767&q=80"
              alt="Advanced repair tools and equipment"
              className="h-[200px] flex-1 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
