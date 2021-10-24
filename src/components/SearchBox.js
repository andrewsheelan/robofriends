import React from "react";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue shaddow-5"
        type="search"
        placeholder="Search Robots"
        onChange={(ev) => onSearchChange(ev.target.value)}
      />
    </div>
  );
};

export default SearchBox;
