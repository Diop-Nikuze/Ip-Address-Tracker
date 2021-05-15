import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [details, setDetails] = useState("");

  useEffect(() => {
    axios.get("https://ipapi.co/json/").then((response) => {
      setDetails(response.data);
    });
  }, []);
  return (
    <div>
      <Home details={details} />
    </div>
  );
}

export default App;
