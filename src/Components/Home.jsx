import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const allCourses = [
    { id: 1, title: "Java Basics" },
    { id: 2, title: "React Fundamentals" },
    { id: 3, title: "Spring Boot Advanced" },
    { id: 4, title: "Node.js Essentials" },
    { id: 5, title: "Python for Beginners" },
  ];

  const filteredCourses = allCourses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Training Tracker!</h1>

      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search courses..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <div className="course-section">
        <h2>Available Courses</h2>
        <ul className="course-list">
          {filteredCourses.map((course) => (
            <li key={course.id} className="course-item">
              {course.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="assigned-tab-link">
        <Link to="/assigned-courses">View Assigned Courses ➜</Link>
      </div>
    </div>
  );
}

export default Home;
