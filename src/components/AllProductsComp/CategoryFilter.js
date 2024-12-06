import React from "react";

const CategoryFilter = ({ selectedCategories, setSelectedCategories }) => {
  const categories = [
    "all",
    "phones",
    "computers",
    "cameras",
    "watches",
    "headphones",
    "gaming",
    "clothes",
    "furniture",
    "others",
  ];

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((cat) => cat !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  return (
    <div className="mb-6 p-10 sm:p-6 lg:p-10 flex flex-col gap-4 items-start">
      {categories.map((cat) => (
        <label
          key={cat}
          className="flex items-center gap-2 cursor-pointer text-sm sm:text-base"
        >
          <input
            type="checkbox"
            checked={selectedCategories.includes(cat)}
            onChange={() => handleCheckboxChange(cat)}
            className="form-checkbox h-5 w-5 sm:h-6 sm:w-6"
          />
          <span className="capitalize">{cat}</span>
        </label>
      ))}
    </div>
  );
};

export default CategoryFilter;
