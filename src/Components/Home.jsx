import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaSearch } from "react-icons/fa";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const allCourses = [
    {
      id: 1,
      title: "Java Basics",
      description: "Learn the fundamentals of Java programming.",
    },
    {
      id: 2,
      title: "React Fundamentals",
      description: "Build dynamic UIs with React.",
    },
    {
      id: 3,
      title: "Spring Boot Advanced",
      description: "Master backend development with Spring Boot.",
    },
    {
      id: 4,
      title: "Node.js Essentials",
      description: "Create scalable server-side applications.",
    },
    {
      id: 5,
      title: "Python for Beginners",
      description: "Start your journey with Python programming.",
    },
  ];

  const filteredCourses = allCourses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 p-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#000048] py-4 px-6 text-center mb-8">
          Welcome to the Training Tracker!
        </h1>

        <form
          className="mb-8 flex justify-center px-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-12 pr-4 py-2 border border-[#000048] rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-3 text-[#000048] text-lg" />
          </div>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="border border-[#000048] bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4 text-[#000048]">
                <FaBookOpen className="text-2xl mr-2" />
                <h3 className="text-xl font-semibold">{course.title}</h3>
              </div>
              <p className="text-gray-700">{course.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/assigned-courses"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition"
          >
            View All Courses ➜
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
