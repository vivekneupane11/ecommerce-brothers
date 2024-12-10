import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";
import { Link } from "react-router";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id, size) => {
    dispatch(removeFromCart({ id, size }));
  };

  const handleQuantityChange = (id, size, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, size, quantity }));
    }
  };

  if (cart.items.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold text-gray-600">Your cart is empty!</h2>
        <p className="text-gray-500 mt-2">Browse products to add items.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Your Shopping Cart
      </h1>
      <div className="max-w-5xl mx-auto">
        {cart.items.map((item) => (
          <div
            key={`${item.id}-${item.size}`}
            className="flex flex-col sm:flex-row justify-between items-center border-b py-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">Size: {item.size}</p>
                <p className="text-sm text-gray-600">
                  Price: ${item.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">
                  Total: ${(item.quantity * item.price).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <div className="flex items-center gap-2 border">
                <button
                  className="w-8 h-8 bg-gray-200 text-center"
                  onClick={() =>
                    handleQuantityChange(item.id, item.size, item.quantity - 1)
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  readOnly
                  className="w-10 text-center border-none"
                />
                <button
                  className="w-8 h-8 bg-gray-200 text-center"
                  onClick={() =>
                    handleQuantityChange(item.id, item.size, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleRemove(item.id, item.size)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="flex flex-col md:flex-row justify-between items-start mt-8 gap-6">
          <div className="flex flex-col w-full md:w-1/2 gap-4">
            <Link
              to="/home"
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
            >
              Return To Shop
            </Link>
          </div>

          <div className="w-full md:w-1/3 border p-4 rounded">
            <h2 className="text-lg font-bold mb-4">Cart Total</h2>
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
              <span className="mb-4">${cart.totalAmount.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              className="w-full mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
