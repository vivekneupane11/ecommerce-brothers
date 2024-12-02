import React, { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseProvider";

const Account = () => {
  const { currentUser, logout } = useContext(FirebaseContext);

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
      <div className="mt-4">
        <p>
          <strong>Name:</strong> {currentUser.displayName || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
      </div>
      <button
        onClick={handleLogout}
        className="mt-4 p-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Account;
