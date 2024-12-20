import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid"></div>
    </div>
  );
};

export default Loader;
