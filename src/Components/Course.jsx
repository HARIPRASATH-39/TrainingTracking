import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseService from "../services/CourseService";
import CourseCard from "../components/CourseCard";
import { FaPlus } from "react-icons/fa";

function Course() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await CourseService.getAll();
      setCourses(res.data);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  const handleView = (course) => {
    setSelectedCourse(course);
    setShowViewModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      console.log("Deleting course:", selectedCourse.courseId);

      await CourseService.delete(selectedCourse.courseId);
      setShowDeleteModal(false);
      fetchCourses();
    } catch (err) {
      console.error("Error deleting course:", err);
    }
  };

  const handleDelete = (course) => {
    setSelectedCourse(course);
    setShowDeleteModal(true);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen pt-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[#000048]">All Courses</h2>
        <Link
          to="/courses/add"
          className="bg-[#000048] text-white px-4 py-2 rounded hover:bg-indigo-800 flex items-center gap-2"
        >
          <FaPlus /> Add Course
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.courseId}
            course={course}
            onView={handleView}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* View Modal */}
      {showViewModal && selectedCourse && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold text-[#000048] mb-4">
              Course Details
            </h3>
            <p>
              <strong>Name:</strong> {selectedCourse.courseName}
            </p>
            <p>
              <strong>Level:</strong> {selectedCourse.courseLevel}
            </p>
            <p>
              <strong>Duration:</strong> {selectedCourse.courseDuration}
            </p>
            <p>
              <strong>Description:</strong> {selectedCourse.courseDescription}
            </p>
            <div className="mt-4 text-right">
              <button
                onClick={() => setShowViewModal(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && selectedCourse && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Confirm Delete
            </h3>
            <p>
              Are you sure you want to delete{" "}
              <strong>{selectedCourse.courseName}</strong>?
            </p>
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Course;
