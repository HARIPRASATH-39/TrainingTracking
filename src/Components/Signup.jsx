import React from "react";
import { Link } from "react-router-dom";

// Form field configuration
const signupFields = [
  {
    id: "id",
    label: "ID",
    type: "text",
    placeholder: "Enter your ID",
    colSpan: 1,
  },
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    colSpan: 1,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    colSpan: 2,
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    colSpan: 1,
  },
  {
    id: "grade",
    label: "Grade",
    type: "text",
    placeholder: "Enter your grade",
    colSpan: 1,
  },
];

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 pt-16">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg px-8 py-6">
        <h1 className="text-3xl font-bold text-center text-[#000048] mb-6">
          Signup
        </h1>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {signupFields.map((field) => (
              <div
                key={field.id}
                className={`col-span-${field.colSpan} ${
                  field.colSpan === 2 ? "sm:col-span-2" : ""
                }`}
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
                  className="w-full px-4 py-2 border border-[#000048] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-[#000048] text-white py-2 rounded-md hover:bg-[#000060] transition"
          >
            Signup
          </button>

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
