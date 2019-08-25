import React, { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("42");
  return (
    <div>
      Search:
      <input
        type="text"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <button onClick={() => alert(`Let the search for ${search} begin!`)}>
        Go
      </button>
    </div>
  );
}
