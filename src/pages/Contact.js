import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col gap-6 md:flex-row items-center justify-center md:h-[550px]  p-6 lg:mx-24">
      <div className="bg-white shadow-md rounded-lg p-12 mb-6 ">
        <div className="mb-6">
          <h2 className="text-xl font-semibold flex items-center mb-2">
            <FaPhoneAlt className="text-red-500 mr-2" /> Call To Us
          </h2>
          <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
          <p className="text-gray-600 font-medium">Phone: +8801611122222</p>
        </div>
        <hr className="my-4" />
        <div>
          <h2 className="text-xl font-semibold flex items-center mb-2">
            <FaEnvelope className="text-red-500 mr-2" /> Write To Us
          </h2>
          <p className="text-gray-600">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-gray-600 font-medium">
            Email: customer@exclusive.com
          </p>
          <p className="text-gray-600 font-medium">
            Email: support@exclusive.com
          </p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-10 mb-6  ">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Your Phone *"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
          ></textarea>
          <button
            type="submit"
            className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
