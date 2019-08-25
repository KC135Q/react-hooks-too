import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import cookie from "react-cookies";

function App() {
  const [search, setSearch] = useState("42");
  const [lastSearch, setLastSearch] = useState(
    "Life, The Universe, and Everything."
  );
  const handleChange = event => {
    setSearch(event.target.value);
  };
  const handleSearch = () => {
    alert(`Let the search for ${search} begin.`);
    cookie.save("searchTerm", search, { path: "/" });
    setSearch("43");
  };

  useEffect(() => {
    setLastSearch(cookie.load("searchTerm"));
  }, [search]);

  return (
    <div className="App">
      <header className="App-header">
        <Header
          search={search}
          handleChange={handleChange}
          handleSearch={() => handleSearch()}
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Most recent search was '{lastSearch}'</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
