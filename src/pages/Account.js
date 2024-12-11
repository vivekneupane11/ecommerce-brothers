import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/FirebaseProvider";

const Account = () => {
  const { currentUser, logout, fetchOrders, removeOrder } =
    useContext(FirebaseContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getOrders = async () => {
      try {
        if (currentUser) {
          const fetchedOrders = await fetchOrders();
          setOrders(fetchedOrders);
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to fetch orders. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, [currentUser, fetchOrders]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleRemoveOrder = async (orderId) => {
    try {
      await removeOrder(orderId);
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== orderId)
      );
    } catch (error) {
      console.error("Error removing order:", error);
      setError("Failed to remove order. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold">My Account</h2>

      {/* User Information */}
      <div className="mt-4">
        <p>
          <strong>Name:</strong> {currentUser?.displayName || "Guest"}
        </p>
        <p>
          <strong>Email:</strong> {currentUser?.email || "N/A"}
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>

      {/* Current Orders */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Current Orders</h3>
        {loading ? (
          <p>Loading orders...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {orders.map((order) => (
              <div
                key={order.id}
                className="p-4 border rounded shadow-sm bg-white flex flex-col gap-2"
              >
                <p>
                  <strong>Order ID:</strong> {order.id}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {order.orderDate?.toDate().toLocaleString() || "N/A"}
                </p>
                <p>
                  <strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}
                </p>
                <p>
                  <strong>Payment Method:</strong> {order.paymentMethod}
                </p>
                <p>
                  <strong>Items:</strong>
                </p>
                <ul className="flex flex-col gap-2">
                  {order.items.map((item, index) => (
                    <li className="flex gap-4 items-center" key={index}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-10 h-10 object-cover"
                      />
                      <div>
                        <p>{item.title}</p>
                        <p>
                          {item.size} - ${item.price.toFixed(2)} x{" "}
                          {item.quantity}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleRemoveOrder(order.id)}
                  className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove Order
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
