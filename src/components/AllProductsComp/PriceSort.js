import React from "react";

const PriceSort = ({ sortOption, setSortOption }) => {
  return (
    <div className="mt-4">
      <label
        htmlFor="priceSort"
        className="mr-2 text-sm font-medium text-gray-700"
      >
        Sort by:
      </label>
      <select
        id="priceSort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="p-2 border rounded-md"
      >
        <option value="relevant">Relevant</option>
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
      </select>
    </div>
  );
};

export default PriceSort;
