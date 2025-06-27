import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10">Login Page</h1>
      <form className="max-w-md mx-auto mt-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="username">
            Email
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
