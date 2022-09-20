import React, { useState } from "react";
import "../src/App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
