import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

function PlantPredictor() {
  const [soilType, setSoilType] = useState("");
  const [plantType, setPlantType] = useState("");
  const [result, setResult] = useState("");
  const [loadingPlant, setLoadingPlant] = useState(false);

  const [soilScore, setSoilScore] = useState(null);
  const [fertilizer, setFertilizer] = useState("");
  const [nutrientTrend, setNutrientTrend] = useState([]);

  // Fetch crop price prediction
  const fetchIrrigationDetails = async () => {
    if (!soilType || !plantType) {
      alert("Please enter both soil type and plant type.");
      return;
    }

    setLoadingPlant(true);
    try {
      const ai = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const response = await ai.generateContent({
        contents: [{ role: "user", parts: [{ text: `What is the market price prediction for ${soilType}? Multiply it by ${plantType}. If the crop does not exist, state that explicitly.` }] }]
      });

      const text = response?.candidates?.[0]?.content?.parts?.[0]?.text || "Failed to retrieve data.";
      setResult(text);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResult("Failed to fetch data.");
    }
    setLoadingPlant(false);
  };

  // Analyze Soil Health
  const analyzeSoil = () => {
    let recommendation = "Maintain current soil balance.";
    let score = 50;
    let trendData = [40, 45, 50, 55, 60];

    if (soilType === "sandy" && plantType === "wheat") {
      recommendation = "Increase nitrogen levels (Use Urea or Ammonium Nitrate).";
      score = 75;
      trendData = [30, 40, 50, 60, 75];
    } else if (soilType === "clay" && plantType === "corn") {
      recommendation = "Increase potassium levels (Use Potash-based fertilizers).";
      score = 65;
      trendData = [20, 35, 50, 60, 65];
    } else if (soilType === "loamy" && plantType === "rice") {
      recommendation = "Boost phosphorus content (Use Superphosphate fertilizers).";
      score = 85;
      trendData = [50, 60, 70, 80, 85];
    }

    setFertilizer(recommendation);
    setSoilScore(score);
    setNutrientTrend(trendData);
  };

  // Chart Data
  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Now"],
    datasets: [
      {
        label: "Soil Nutrient Score",
        data: nutrientTrend,
        borderColor: "#ff9800",
        backgroundColor: "rgba(255, 152, 0, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center py-10 px-4 min-h-screen bg-green-600 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Crop & Soil Management</h1>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl justify-center">
        {/* Crop Value Section */}
        <div className="bg-green-700 p-6 rounded-lg shadow-lg w-full max-w-lg min-h-[400px]">
          <h2 className="text-2xl font-bold mb-4 text-center">Crop Value</h2>
          <label className="block mb-2 font-semibold">Crop Name</label>
          <input
            type="text"
            className="w-full p-2 rounded-lg text-black bg-white"
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
          />

          <label className="block mt-4 mb-2 font-semibold">Quantity</label>
          <input
            type="text"
            className="w-full p-2 rounded-lg text-black bg-white"
            value={plantType}
            onChange={(e) => setPlantType(e.target.value)}
          />

          <button
            onClick={fetchIrrigationDetails}
            className="w-full bg-green-600 hover:bg-green-800 text-white font-bold py-2 rounded-lg mt-6"
            disabled={loadingPlant}
          >
            {loadingPlant ? "Fetching..." : "Get Crop Value"}
          </button>

          {result && (
            <div className="bg-green-700 p-4 rounded-lg shadow-lg mt-6">
              <h2 className="text-xl font-bold">📝 AI Recommendation:</h2>
              <p className="mt-2">{result}</p>
            </div>
          )}
        </div>

        {/* Soil Care Section */}
        <div className="bg-yellow-700 p-6 rounded-lg shadow-lg w-full max-w-lg min-h-[400px]">
          <h2 className="text-2xl font-bold mb-4 text-center">Soil Care</h2>

          <button
            onClick={analyzeSoil}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-lg"
          >
            🔍 Analyze Soil
          </button>

          {soilScore !== null && (
            <div className="mt-4 p-4 bg-white text-black shadow-md rounded-md">
              <p className="text-lg font-semibold">💡 AI Recommendation:</p>
              <p className="text-sm">{fertilizer}</p>

              {/* Soil Health Score Display */}
              <div className="mt-3">
                <p className="text-lg font-semibold">
                  📊 Soil Health Score:{" "}
                  <span className={`text-${soilScore > 70 ? "green" : soilScore > 50 ? "yellow" : "red"}-600`}>
                    {soilScore}/100
                  </span>
                </p>
                {soilScore < 50 && <p className="text-red-600 font-semibold">⚠️ Warning: Your soil is heavily unbalanced!</p>}
              </div>

              {/* Graph Visualization */}
              <div className="mt-6">
                <h3 className="text-md font-semibold text-gray-700">📈 Nutrient Trend Over Time</h3>
                <Line data={chartData} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlantPredictor;
