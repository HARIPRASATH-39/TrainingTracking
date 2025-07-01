import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUserCircle, FaBars, FaTimes, FaBell } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    {
      label: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      label: "Notifications",
      path: "#",
      icon: (
        <div className="relative">
          <FaBell />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>
      ),
      hideLabel: true,
    },
  ];

  const profileLinks = [
    { label: "My Profile", path: "/profile" },
    { label: "Settings", path: "/settings" },
    { label: "Logout", path: "/logout" },
  ];

  const navLinkStyle = (path) =>
    location.pathname === path
      ? "text-white"
      : "text-[#06c7cc] hover:text-white transition";

  return (
    <nav className="bg-[#000048] px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h3 className="text-white text-2xl font-bold">Training Tracker</h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center gap-2 ${navLinkStyle(item.path)}`}
              >
                {item.icon}
                {!item.hideLabel && item.label}
              </Link>
            </li>
          ))}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 text-[#06c7cc] hover:text-white transition"
            >
              <FaUserCircle className="text-xl" />
              Profile
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                {profileLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#06c7cc] text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-[#000048] z-40 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="px-6 py-4">
          <h3 className="text-white text-2xl font-bold mb-6">
            Training Tracker
          </h3>
          <ul className="space-y-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 ${navLinkStyle(
                    item.path
                  )}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.icon}
                  {!item.hideLabel && item.label}
                </Link>
              </li>
            ))}
            {/* Profile options always visible in mobile */}
            <li className="text-[#06c7cc]">
              <div className="flex items-center gap-2 mb-2">
                <FaUserCircle /> Profile
              </div>
              <div className="ml-6 space-y-2 text-sm text-white">
                {profileLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
