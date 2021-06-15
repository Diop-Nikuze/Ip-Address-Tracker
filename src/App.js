import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Box, ChakraProvider, Flex, Spinner } from "@chakra-ui/react";
import Data from "./components/Data";
import Search from "./components/Search";
import Map from "./components/Map";

function App() {
  const [details, setDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [ip, setIP] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIP(search);
  };

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=at_BOYpXen4uMg5FWwDyBif4dnMxxJ1v&ipAddress=${ip}`
      )
      .then((response) => {
        setDetails([response.data]);
        setLoading(true);
      })
      .catch((error) => console.log(error));
  }, [ip]);

  return (
    <ChakraProvider>
      <Search onchange={handleChange} onsubmit={handleSubmit} />
      <Box>
        {loading ? (
          <Data details={details} />
        ) : (
          <Flex justifyContent="center">
            <Spinner color="red.500" size="xl" speed=".8s" />
          </Flex>
        )}
      </Box>

      <Box>
        {loading ? (
          <Map locations={details} />
        ) : (
          <Flex justifyContent="center" alignItems="center" h="70vh">
            <Spinner color="red.500" size="xl" speed=".8s" />
          </Flex>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
