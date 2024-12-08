import React from "react";

const Header = ({ data1, data2 }) => {
  return (
    <div className="flex flex-col items-start ml-5 lg:ml-0">
      <div className="flex gap-3">
        <div className="bg-red-500 text-red-500 text-sm font-semibold px-1 py-1 rounded-md inline-block">
          a
        </div>
        <h1 className="text-red-500 font-semibold">{data1}</h1>
      </div>
      <h1 className="text-3xl font-bold mt-2 text-center sm:text-left">
        {data2}
      </h1>
    </div>
  );
};

export default Header;
