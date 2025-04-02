import React from "react";
import loginimage from "../images/loginpageImage.jpg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }
      
      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      navigate("/Home");
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.message || "Login failed. Please try again.");
    }
  };
  
  return (
    <div
      className="flex items-center justify-center bg-gray-400 min-h-screen w-full absolute inset-0 bg-cover bg-center  px-4"
      style={{ backgroundImage:`url(${loginimage})` }}
    >
      <div className="w-full max-w-md bg-transparent p-6 rounded-lg shadow-lg z-50 backdrop-opacity-100 border-amber-100 border-1 ">
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
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-700 text-sm font-bold">
          Don't have an account?{" "}
          <button
            className="text-blue-500 hover:underline font-bold cursor-pointer"
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