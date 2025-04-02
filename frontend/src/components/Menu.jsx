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
        className={`fixed top-0 left-0 w-64 md:w-80 h-full bg-green-200 shadow-lg text-black p-6 rounded z-50 transform ${
          show ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-10">Menu</h2>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-10 font-bold mt-5">
          <Link to="/Home" className="bg-green-400 rounded-2xl p-2 hover:bg-green-500" onClick={onClose}>
            Home
          </Link>
          <Link to="/dashboard" className="bg-green-400 rounded-2xl p-2 hover:bg-green-500" onClick={onClose}>
            Dashboard
          </Link>
          <Link to="/Weather" className="bg-green-400 rounded-2xl p-2 hover:bg-green-500"  onClick={onClose}>
            Weather
          </Link>
          <Link to="/PlantPredictor" className="bg-green-400 rounded-2xl p-2 hover:bg-green-500"  onClick={onClose}>
          PlantPredictor
          </Link>
          {/* <Link to="/irrigation-planner" className="bg-green-400 rounded-2xl p-2 hover:bg-green-500">
            Irrigation Planner
          </Link> */}
          <Link to="/report" className="bg-green-400 rounded-2xl p-2 hover:bg-green-500"  onClick={onClose}>
            Report
          </Link>
          <Link to="/FutureScope" className="bg-green-400 rounded-2xl p-2 hover:bg-green-500"  onClick={onClose}>
            Future Scope
          </Link>
        </div>
      </div>
     
    </>
  );
};

export default Menu;
