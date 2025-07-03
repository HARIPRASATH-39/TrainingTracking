import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CourseService from "../services/CourseService";
import { FaArrowLeft } from "react-icons/fa";

function CourseForm() {
  const [courseName, setCourseName] = useState("");
  const [courseLevel, setCourseLevel] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [courseDescription, setCourseDescription] = useState(
    "This is a placeholder description."
  );
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      CourseService.getById(id)
        .then((res) => {
          const data = res.data;
          setCourseName(data.courseName);
          setCourseLevel(data.courseLevel);
          setCourseDuration(data.courseDuration);
          setCourseDescription(
            data.courseDescription || "This is a placeholder description."
          );
        })
        .catch((err) => console.error("Error loading course:", err));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const course = {
      courseName,
      courseLevel,
      courseDuration,
      courseDescription,
    };

    try {
      if (id) {
        await CourseService.update(id, course);
      } else {
        await CourseService.add(course);
      }
      navigate("/courses");
    } catch (err) {
      console.error("Error saving course:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center px-4 pt-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl relative"
      >
        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate("/courses")}
          className="absolute top-4 left-4 px-3 py-2 bg-indigo-100 text-[#000048] rounded-md mr-4 hover:bg-indigo-200 flex items-center gap-2 transition cursor-pointer"
        >
          <FaArrowLeft className="text-sm" />
          <span className="text-sm font-medium">Back</span>
        </button>

        <h2 className="text-3xl font-bold text-[#000048] mb-6 text-center">
          {id ? "Edit Course" : "Add Course"}
        </h2>

        {/* Course Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course Name
          </label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Level & Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Level
            </label>
            <select
              value={courseLevel}
              onChange={(e) => setCourseLevel(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            >
              <option value="" disabled>
                Select Level
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration
            </label>
            <input
              type="text"
              value={courseDuration}
              onChange={(e) => setCourseDuration(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate("/courses")}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#000048] text-white rounded hover:bg-indigo-800 cursor-pointer"
          >
            {id ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
