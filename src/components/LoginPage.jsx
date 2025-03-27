import React from "react";
import loginimage from "../images/loginpageImage.jpg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here...
    navigate("/Home");
  };

  return (
    <div
      className="flex items-center justify-center bg-gray-400 min-h-screen w-full absolute inset-0 bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${loginimage})` }}
    >
      <div className="w-full max-w-md bg-transparent p-6 rounded-lg shadow-lg z-50">
        <h2 className="text-4xl text-center text-gray-700 mb-6 font-extrabold">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold text-gray-700 text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 w-full p-2 rounded-lg text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block font-bold text-gray-700 text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 w-full p-2 rounded-lg text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-700 text-sm">
          Don't have an account?{" "}
          <button
            className="text-blue-500 hover:underline font-bold"
            onClick={() => navigate("/SignUp")}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
