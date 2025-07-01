import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/AuthService";

const loginFields = [
  {
    id: "employeeEmail",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    id: "employeePassword",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

function Login() {
  const [credentials, setCredentials] = useState({
    employeeEmail: "",
    employeePassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await authService.login(credentials);
      setMessage("Login successful!");
      sessionStorage.setItem("token", response.token);
      sessionStorage.setItem("grade", response.grade);
      sessionStorage.setItem("id", response.employeeId);
      setTimeout(() => navigate("/home"), 1500);
    } catch (error) {
      setMessage(error?.data || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-[#000048] mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          {loginFields.map((field) => (
            <div key={field.id} className="mb-4">
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                value={credentials[field.id]}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#000048] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={field.placeholder}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#000048] text-white hover:bg-[#000060]"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {message && (
            <div className="mt-4 text-center text-sm text-red-600">
              {message}
            </div>
          )}

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-[#06c7cc] hover:underline font-medium"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
