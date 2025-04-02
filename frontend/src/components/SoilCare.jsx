import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const SoilOptimizer = () => {
  const [soilType, setSoilType] = useState("");
  const [crop, setCrop] = useState("");
  const [fertilizer, setFertilizer] = useState("");
  const [soilScore, setSoilScore] = useState(null);
  const [nutrientTrend, setNutrientTrend] = useState([]);

  const SoilCare = () => {
    let recommendation = "Maintain current soil balance.";
    let score = 50;
    let trendData = [];

    if (soilType === "sandy" && crop === "wheat") {
      recommendation = "Increase nitrogen levels (Use Urea or Ammonium Nitrate).";
      score = 75;
      trendData = [30, 40, 50, 60, 75];
    } else if (soilType === "clay" && crop === "corn") {
      recommendation = "Increase potassium levels (Use Potash-based fertilizers).";
      score = 65;
      trendData = [20, 35, 50, 60, 65];
    } else if (soilType === "loamy" && crop === "rice") {
      recommendation = "Boost phosphorus content (Use Superphosphate fertilizers).";
      score = 85;
      trendData = [50, 60, 70, 80, 85];
    } else {
      trendData = [40, 45, 50, 55, 60];
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
    <div className="p-6 bg-gradient-to-r from-yellow-100 to-orange-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-orange-700 mb-4">🌱 AI-Powered Soil Nutrient Optimizer</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">🟤 Soil Type</label>
        <select value={soilType} onChange={(e) => setSoilType(e.target.value)} className="w-full p-2 border rounded">
          <option value="">Select Soil Type</option>
          <option value="sandy">Sandy</option>
          <option value="clay">Clay</option>
          <option value="loamy">Loamy</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">🌾 Crop</label>
        <select value={crop} onChange={(e) => setCrop(e.target.value)} className="w-full p-2 border rounded">
          <option value="">Select Crop</option>
          <option value="wheat">Wheat</option>
          <option value="corn">Corn</option>
          <option value="rice">Rice</option>
        </select>
      </div>

      <button onClick={SoilCare} className="px-6 py-2 bg-orange-600 text-white font-semibold rounded shadow hover:bg-orange-700 transition">
        🔍 Analyze Soil
      </button>

      {soilScore !== null && (
        <div className="mt-4 p-4 bg-white shadow-md rounded-md">
          <p className="text-lg font-semibold text-gray-800">💡 AI Recommendation:</p>
          <p className="text-sm text-gray-600">{fertilizer}</p>

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
  );
};

export default SoilOptimizer;
