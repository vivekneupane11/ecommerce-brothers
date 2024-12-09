import React from "react";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="p-6 lg:mx-24">
      <h1 className="text-2xl font-bold mb-6 text-center">Billing Details</h1>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Billing Details Form */}
        <div className="flex-1">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium"
              >
                Street Address*
              </label>
              <input
                type="text"
                id="streetAddress"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="apartment" className="block text-sm font-medium">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                id="apartment"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium">
                Town/City*
              </label>
              <input
                type="text"
                id="city"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center md:col-span-2">
              <input type="checkbox" id="saveInfo" className="mr-2" />
              <label htmlFor="saveInfo" className="text-sm">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        {/* Cart Summary Section */}
        <div className="w-full lg:w-1/3 border p-4 rounded">
          <h2 className="text-lg font-bold mb-4">Your Order</h2>
          <div>
            {cart.items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex justify-between text-sm border-b pb-2 mb-2"
              >
                <img src={item.image} className="h-[52px] w-[52px]" />
                <span>{item.title}</span>
                <span>${(item.quantity * item.price).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal:</span>
            <span>${cart.totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-lg font-semibold border-t pt-2">
            <span>Total:</span>
            <span>${cart.totalAmount.toFixed(2)}</span>
          </div>

          {/* Payment Options */}
          <div className="mt-4">
            <h3 className="text-sm font-bold mb-2">Payment Method</h3>
            <div className="flex items-center gap-2 mb-2">
              <input type="radio" name="payment" id="bank" className="mr-2" />
              <label htmlFor="bank" className="text-sm">
                Bank
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="payment" id="cash" className="mr-2" />
              <label htmlFor="cash" className="text-sm">
                Cash on delivery
              </label>
            </div>
          </div>

          {/* Coupon Section */}
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Apply Coupon
            </button>
          </div>

          <button className="w-full mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
