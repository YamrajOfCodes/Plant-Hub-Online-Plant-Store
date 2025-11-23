import React from "react";
import "./Sectiontitle.css";

const SectionTitle = ({ children }) => {
  return (
    <div className=" mt-10 relative flex items-center justify-center py-8">
      
      <div className="corner left-corner"></div>
      <h1 className="text-white text-center text-sm md:text-4xl font-bold tracking-wide mx-8">
        {children}
      </h1>
      <div className="corner right-corner"></div>

    </div>
  );
};

export default SectionTitle;

