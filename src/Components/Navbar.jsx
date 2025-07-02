import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaUserCircle, FaBell, FaBars, FaTimes } from "react-icons/fa";
import UtilService from "../services/UtilService";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = UtilService.isAuthenticated();

  const handleLogout = () => {
    UtilService.logout();
    setShowDropdown(false);
    navigate("/login");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <nav className="bg-[#000048] text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <h3 className="text-2xl font-bold">Training Tracker</h3>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className=" flex items-center gap-2">
          <FaHome /> Home
        </Link>

        {isAuthenticated ? (
          <>
            <Link to="#" className="relative flex items-center gap-2">
              <FaBell />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">
                3
              </span>
            </Link>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className=" flex items-center gap-2 cursor-pointer"
              >
                <FaUserCircle /> Profile
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-36 bg-white text-black rounded shadow">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    My Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <Link to="/login" className="">
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl text-[#06c7cc]"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#000048] text-white p-4 md:hidden">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block mb-2"
          >
            Home
          </Link>

          {isAuthenticated ? (
            <>
              <Link
                to="#"
                onClick={() => setMenuOpen(false)}
                className="block mb-2"
              >
                Notifications
              </Link>
              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="block mb-2"
              >
                My Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="block mb-2"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
