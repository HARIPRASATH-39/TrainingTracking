import React from "react";
import "../css/Signup.css";
function Signup() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10">Signup Page</h1>
      <form className="max-w-md mx-auto mt-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="id">
            ID
          </label>
          <input
            type="text"
            id="id"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
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

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="grade">
            Grade
          </label>
          <input
            type="text"
            id="grade"
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter your grade"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
