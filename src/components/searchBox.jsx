import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      className="form-control my-3"
      type="search"
      name="query"
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
      placeholder="Search..."
      aria-label="Search"
    />
  );
};

export default SearchBox;
