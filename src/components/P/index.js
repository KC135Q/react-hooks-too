import React, { useContext } from "react";
import SearchContext from "../../context/SearchContext";

export default function P({ searchTerm }) {
  return <p>Most recent search was '{useContext(SearchContext)}'</p>;
}
