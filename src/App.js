import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "../src/components/Home";
import Search from "./components/Search";
import Map from "./components/Map";

function App() {
  const [details, setDetails] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(search);
    // setSearch("");
  };

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=at_BOYpXen4uMg5FWwDyBif4dnMxxJ1v&ipAddress=${query}`
      )
      .then((response) => {
        setDetails([response.data]);
      })
      .catch((error) => console.log(error));
  }, [query]);

  return (
    <ChakraProvider>
      <Search onchange={handleChange} onsubmit={handleSubmit} />
      <Home details={details} />
      <Map locations={details} />
    </ChakraProvider>
  );
}

export default App;
