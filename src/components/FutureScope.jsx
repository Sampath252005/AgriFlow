import React from "react";
import { useNavigate } from "react-router-dom";

const FutureScope = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 to-green-200 min-h-screen pt-10 ">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center pb-15">
        🌍 Future Scope of Smart Farming 🚀
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Smart Water Usage Section */}
        <div
          className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer"
          onClick={() => navigate("/WaterUsage")}
        >
          <h3 className="text-xl font-semibold text-blue-700">
            🚰 Smart Water Usage Optimization (IoT-Enabled)
          </h3>
          <p className="text-gray-600 mt-2">
            IoT-powered soil moisture sensors and AI-driven irrigation systems automate water
            distribution efficiently. Smart valves and real-time weather data reduce water waste by
            up to <span className="text-blue-600 font-semibold">40%</span>.
          </p>
          <p className="text-gray-600 mt-1">
            AI predicts irrigation needs, preventing overwatering. Farmers receive mobile alerts
            and analytics for **sustainable water management**.
          </p>
        </div>

        {/* AI-Powered Smart Soil Health Monitoring */}
        <div
          className="p-6 bg-white shadow-lg rounded-lg hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer"
          onClick={() => navigate("/SoilCare")}
        >
          <h3 className="text-xl font-semibold text-green-700">
            🌱 AI-Powered Smart Soil Health Monitoring
          </h3>
          <p className="text-gray-600 mt-2">
            IoT-based sensors monitor **pH, NPK, and temperature** in real time. AI-driven analytics
            recommend **organic fertilizers** to improve soil fertility and boost **crop yield**.
          </p>
          <p className="text-gray-600 mt-1">
            Drones & spectral analysis detect nutrient deficiencies **before symptoms appear**.
            Farmers get actionable insights via a **mobile dashboard**.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutureScope;
