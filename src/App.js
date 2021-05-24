import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "../src/components/Home";

function App() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=at_BOYpXen4uMg5FWwDyBif4dnMxxJ1v&ipAddress=${details}`
      )
      .then((response) => {
        setDetails([response.data]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ChakraProvider>
      <Home details={details} />
    </ChakraProvider>
  );
}

export default App;
