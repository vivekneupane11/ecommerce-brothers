import React from "react";
import { useNavigate } from "react-router";

const ViewAllButton = () => {
  const navigate = useNavigate();
  const goToAllProducts = () => {
    navigate("/allproducts");
  };
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={goToAllProducts}
        className="bg-red-500  text-white font-semibold py-2 px-4 rounded-sm transition duration-300 hover:bg-red-600"
      >
        View All Products
      </button>
    </div>
  );
};

export default ViewAllButton;
