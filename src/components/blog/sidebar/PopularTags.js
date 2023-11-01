import React from "react";

const PopularTags = ({ filterFunctions }) => {
  const tags = ["All", "Dubai", "Briefing", "Creek", "Vlog", "Downtown", "Emaar"];

  return (
    <div className="sidebar-widget mb30 pb20">
      <h6 className="widget-title">Popular Tags</h6>
      <div className="tag-list mt20">
        {tags.map((tag, index) => (
          <a
            className={`${
              filterFunctions.filter == tag ? "video-filter-active" : ""
            }`}
            href="#"
            key={index}
            onClick={() => filterFunctions.setFilter(tag)}
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
