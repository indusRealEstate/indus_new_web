import React from "react";

const Category = ({ filterFunctions }) => {
  const categories = ["Houses", "Apartments", "Office", "Villa", "Townhome"];

  return (
    <div className="sidebar-widget mb30">
      <p className="widget-title">Categories</p>
      <div className="category-list d-flex flex-column mt20">
        {categories.map((category, index) => (
          <a href="#" key={index}>
            {category}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Category;
