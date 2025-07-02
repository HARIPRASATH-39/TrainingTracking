import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService"; // adjust path if needed

const signupFields = [
  {
    id: "employeeId",
    label: "ID",
    type: "text",
    placeholder: "Enter your ID",
    colSpan: 1,
  },
  {
    id: "employeeName",
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    colSpan: 1,
  },
  {
    id: "employeeEmail",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    colSpan: 2,
  },
  {
    id: "employeePassword",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    colSpan: 1,
  },
  {
    id: "employeeGrade",
    label: "Grade",
    type: "text",
    placeholder: "Enter your grade",
    colSpan: 1,
  },
];

function Signup() {
  const [formData, setFormData] = useState({
    employeeId: "",
    employeeName: "",
    employeeEmail: "",
    employeePassword: "",
    employeeGrade: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await AuthService.register(formData);
      setMessage("Signup successful!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      setMessage(error?.data || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 pt-16">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg px-8 py-6">
        <h1 className="text-3xl font-bold text-center text-[#000048] mb-6">
          Signup
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {signupFields.map((field) => (
              <div
                key={field.id}
                className={field.colSpan === 2 ? "sm:col-span-2" : ""}
              >
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#000048] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-6 py-2 rounded-md transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#000048] text-white hover:bg-[#000060]"
            }`}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>

          {message && (
            <div className="mt-4 text-center text-sm text-red-600">
              {message}
            </div>
          )}

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#06c7cc] hover:underline font-medium"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
