import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Menu = ({ show, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {show && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 md:w-80 h-full bg-gray-800 shadow-lg text-white p-4 z-50 transform ${
          show ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Header */}
        <div className="flex-col space-y-5 ">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-extrabold">Menu</h2>
          <button
            className="bg-gray-700 text-white rounded-md px-4 py-2 font-bold hover:bg-slate-500"
            onClick={onClose}
          >
            Close
          </button>
          </div>
          <div className="flex-col space-y-5 font-bold">
          <p className="bg-slate-600 rounded-2xl p-2 hover:bg-slate-700">Weather</p>
          <p className="bg-slate-600 rounded-2xl p-2 hover:bg-slate-700">Water</p>
          <p className="bg-slate-600 rounded-2xl p-2 hover:bg-slate-700">Soil</p>
          <p className="bg-slate-600 rounded-2xl p-2 hover:bg-slate-700">Weather</p>
          <p className="bg-slate-600 rounded-2xl p-2 hover:bg-slate-700">Weather</p>
          <p className="bg-slate-600 rounded-2xl p-2 hover:bg-slate-700">Weather</p>
          <p className="bg-slate-600 rounded-2xl p-2 hover:bg-slate-700">Weather</p> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
