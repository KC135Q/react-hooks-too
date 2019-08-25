import React from "react";

// Prop destructuring
export default function Header({
  children,
  search,
  handleChange,
  handleSearch
}) {
  return (
    <div>
      Search:
      <input type="text" value={search} onChange={handleChange} />
      <button onClick={handleSearch}>Go</button>
    </div>
  );
}
