import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/FirebaseProvider";

const Account = () => {
  const { currentUser, logout, fetchOrders } = useContext(FirebaseContext);
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

  return (
    <div className="p-6">
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
        className="mt-4 p-2 bg-red-500 text-white rounded"
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
          <div className="mt-4">
            {orders.map((order) => (
              <div key={order.id} className="p-4 border rounded mb-4 shadow-sm">
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
                <ul className="list-disc ml-5">
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.title} - ${item.price} x {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
