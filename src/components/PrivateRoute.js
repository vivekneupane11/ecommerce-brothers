import React, { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseProvider";
import { Link } from "react-router";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useContext(FirebaseContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser || !currentUser.emailVerified) {
    return (
      <div className="h-[89vh] flex items-center justify-center bg-gray-100 px-4 sm:px-6 md:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full sm:w-96">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Access Denied
          </h2>
          <p className="text-gray-600 mb-4">
            Please verify your email or login to access this page.
          </p>
          <Link
            to="/login"
            className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }
  return children;
};

export default PrivateRoute;
