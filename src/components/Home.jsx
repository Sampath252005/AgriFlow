import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[60vh] flex flex-col items-center justify-center text-white text-center px-6 bg-green-500
  transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fadeIn hover:bg-green-600 "
      >
        <h1 className="text-4xl font-bold drop-shadow-md animate-slideUp">
          AgriFlow – AI-Powered Smart Irrigation
        </h1>
        <p className="text-lg mt-2 drop-shadow-md animate-slideUp delay-200">
          Save Water, Increase Yield, and Optimize Farming
        </p>
        <button
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 
          relative overflow-hidden transition-all duration-300 group"
          onClick={() => navigate("/dashboard")}
        >
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          Get Started
        </button>
      </header>

      <section className="py-12 bg-white animate-fadeInUp">
        <h2 className="text-2xl font-bold text-center mb-6">
          Why Choose AgriFlow?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6 max-w-5xl mx-auto">
          {[
            "💧 AI Smart Irrigation",
            "⛅ Live Weather Data",
            "📢 Smart Alerts",
            "🌾 Crop Health Monitoring",
            "📊 Market Price Tracker",
          ].map((feature, index) => (
            <div
              key={index}
              className="p-4 bg-gray-200 rounded-lg text-center shadow-md 
              hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* Live Weather & Soil Stats */}
      <section className="py-12 bg-green-100 animate-fadeInUp">
        <h2 className="text-2xl font-bold text-center mb-6">
          Live Weather & Soil Stats
        </h2>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center gap-6 text-lg">
          {[
            {
              icon: "🌡",
              label: "Temperature",
              value: "28°C",
              color: "text-blue-600",
            },
            {
              icon: "💦",
              label: "Soil Moisture",
              value: "45%",
              color: "text-green-600",
            },
            {
              icon: "⏳",
              label: "Next Irrigation",
              value: "In 3 Days",
              color: "text-red-600",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md w-full text-center 
              hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {stat.icon} {stat.label}:{" "}
              <span className={`font-bold ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white animate-fadeInUp">
        <h2 className="text-2xl font-bold text-center mb-6">
          Farmers' Testimonials
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {[
            {
              text: "AgriFlow saved me 30% of water while increasing my crop yield!",
              author: "Ramesh, India",
            },
            {
              text: "Best smart irrigation tool! Easy to use and highly accurate.",
              author: "Sarah, USA",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md animate-fadeInUp 
              transition-transform duration-500 hover:scale-105 hover:shadow-lg"
            >
              <p className="text-gray-700">"{testimonial.text}"</p>
              <p className="font-bold mt-2">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>© 2025 AgriFlow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
