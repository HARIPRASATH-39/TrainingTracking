import React, { useEffect, useState } from "react";
import { FaUserCircle, FaEnvelope, FaIdBadge, FaStar } from "react-icons/fa";
import EmployeeService from "../services/employeeService";

function Profile({ employeeId }) {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const id = employeeId || sessionStorage.getItem("employeeId");
        const data = await EmployeeService.getEmployeeById(id);
        setEmployee(data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [employeeId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
        <div className="text-xl text-gray-700 animate-pulse">
          Loading profile...
        </div>
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-red-100 to-pink-200">
        <div className="text-xl text-red-700 font-semibold">
          Failed to load profile.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center">
        <FaUserCircle className="text-7xl text-indigo-600 mx-auto mb-6" />
        <h2 className="text-3xl font-extrabold text-[#000048] mb-2">
          {employee.employeeName}
        </h2>
        <p className="text-sm text-gray-500 mb-6 italic">Employee Profile</p>

        <div className="space-y-5 text-left">
          <div className="flex items-center text-gray-700">
            <FaIdBadge className="mr-3 text-indigo-500" />
            <span className="font-semibold">ID:</span>
            <span className="ml-2">{employee.employeeId}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaEnvelope className="mr-3 text-indigo-500" />
            <span className="font-semibold">Email:</span>
            <span className="ml-2">{employee.employeeEmail}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaStar className="mr-3 text-indigo-500" />
            <span className="font-semibold">Grade:</span>
            <span className="ml-2">{employee.employeeGrade}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
