import React from "react";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function CourseCard({ course, onView, onDelete }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold text-[#000048] mb-2">
        {course.courseName}
      </h3>

      <div className="flex justify-between items-center mb-2">
        <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
          {course.courseLevel || "Beginner"}
        </span>
        <span className="text-sm text-gray-500">
          {course.courseDuration || "N/A"}
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        {course.courseDescription ||
          "This is a placeholder description for the course."}
      </p>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => onView(course)}
          title="View Details"
          className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-800 transition cursor-pointer"
        >
          <FaEye />
        </button>

        <Link
          to={`/courses/edit/${course.courseId}`}
          title="Edit Course"
          className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 hover:text-green-800 transition"
        >
          <FaEdit />
        </Link>

        <button
          onClick={() => onDelete(course)}
          title="Delete Course"
          className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-800 transition cursor-pointer"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
