import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import CourseForm from "./Components/CourseForm";
import Course from "./Components/Course";

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/courses/add" element={<CourseForm />} />
        <Route path="/courses/edit/:id" element={<CourseForm />} />
      </Routes>
    </Router>
  );
};

export default App;
