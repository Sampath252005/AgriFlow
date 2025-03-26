import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ show, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {show && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={onClose}></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 md:w-80 h-full bg-gray-800 shadow-lg text-white p-4 z-50 transform ${
          show ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button
            className="bg-gray-700 text-white rounded-md px-4 py-2 hover:bg-gray-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-5 font-bold mt-5">
          <Link to="/" className="bg-gray-700 rounded-md p-2 hover:bg-gray-600">
            Home
          </Link>
          <Link to="/dashboard" className="bg-gray-700 rounded-md p-2 hover:bg-gray-600">
            Dashboard
          </Link>
          <Link to="/irrigation-planner" className="bg-gray-700 rounded-md p-2 hover:bg-gray-600">
            Irrigation Planner
          </Link>
          <Link to="/report" className="bg-gray-700 rounded-md p-2 hover:bg-gray-600">
            Report
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
