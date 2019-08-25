import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState("42");
  const handleChange = event => setSearch(event.target.value);
  const handleSearch = () => {
    alert(`Let the search for ${search} begin.`);
    setSearch("43");
  };
  return (
    <div className="App">
      <header className="App-header">
        <Header
          search={search}
          handleChange={handleChange}
          handleSearch={() => handleSearch()}
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React using {search}
        </a>
      </header>
    </div>
  );
}

export default App;
