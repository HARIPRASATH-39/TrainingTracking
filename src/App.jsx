import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
