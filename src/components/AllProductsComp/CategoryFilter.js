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
    <div className="mb-6 flex flex-wrap p-5 md:flex-col justify-center sm:justify-start gap-2">
      {categories.map((cat) => (
        <label key={cat} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selectedCategories.includes(cat)}
            onChange={() => handleCheckboxChange(cat)}
            className="form-checkbox"
          />
          <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
        </label>
      ))}
    </div>
  );
};

export default CategoryFilter;
