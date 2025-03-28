import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginimage from "../images/loginpageImage.jpg";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Sign-up successful! Please log in.");
        navigate("/"); // Navigate to login page
      } else {
        alert(data.message || "Sign-up failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div
          className="flex items-center justify-center bg-gray-400 min-h-screen w-full absolute inset-0 bg-cover bg-center  px-4"
          style={{ backgroundImage:`url(${loginimage})` }}
        >
       <div className="w-full max-w-md bg-transparent p-6 rounded-lg shadow-lg z-50 backdrop-opacity-100 border-amber-100 border-1 ">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="mt-1 w-full p-2 rounded-lg text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 w-full p-2 rounded-lg text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 w-full p-2 rounded-lg text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="mt-1 w-full p-2 rounded-lg text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm font-bold">
          Already have an account?
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
