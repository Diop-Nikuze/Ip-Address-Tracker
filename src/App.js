import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import Data from "./components/Data";
import Search from "./components/Search";
import Map from "./components/Map";

function App() {
  const [details, setDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [ip, setIP] = useState("");
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIP(search);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=at_BOYpXen4uMg5FWwDyBif4dnMxxJ1v&ipAddress=${ip}`
      )
      .then((response) => {
        setDetails([response.data]);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [ip]);

  return (
    <ChakraProvider>
      <Search onchange={handleChange} onsubmit={handleSubmit} />
      <Data details={details} loading={loading} />
      <Map locations={details} />
    </ChakraProvider>
  );
}

export default App;
