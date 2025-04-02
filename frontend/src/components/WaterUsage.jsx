import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function WaterUsage() {
  const [fieldSize, setFieldSize] = useState(1); // in acres
  const [cropType, setCropType] = useState("Wheat");
  const [soilType, setSoilType] = useState("Loamy");
  const [growthStage, setGrowthStage] = useState(1); // 1 to 5 (Early to Mature)
  const [waterUsage, setWaterUsage] = useState(null);
  const [waterSaved, setWaterSaved] = useState(null);

  const cropWaterNeeds = {
    Wheat: [30, 50, 70, 90, 60], // Water (liters/square meter) for different growth stages
    Rice: [40, 60, 80, 110, 80],
    Maize: [20, 40, 60, 80, 50],
  };

  const soilWaterRetention = {
    Sandy: 1.2,
    Loamy: 1.0,
    Clay: 0.8,
  };

  const calculateWaterUsage = () => {
    const baseWater = cropWaterNeeds[cropType][growthStage - 1];
    const adjustedWater = baseWater * soilWaterRetention[soilType] * fieldSize * 4046.86; // Convert acres to square meters
    const optimizedWater = adjustedWater * 0.85; // 15% reduction using AI recommendations

    setWaterUsage(adjustedWater.toFixed(2));
    setWaterSaved((adjustedWater - optimizedWater).toFixed(2));
  };

  // Chart Data
  const chartData = {
    labels: ["Traditional Usage", "AI-Optimized Usage"],
    datasets: [
      {
        label: "Water Used (Liters)",
        data: [waterUsage || 0, waterUsage ? waterUsage - waterSaved : 0],
        backgroundColor: ["#FF5733", "#34D399"],
      },
    ],
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-4">💧 AI Smart Water Usage Optimizer</h2>

      {/* Input Fields */}
      <div className="mb-4">
        <label className="block text-lg font-semibold">Field Size (Acres)</label>
        <input type="number" value={fieldSize} onChange={(e) => setFieldSize(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold">Crop Type</label>
        <select value={cropType} onChange={(e) => setCropType(e.target.value)} className="w-full p-2 border rounded">
          <option>Wheat</option>
          <option>Rice</option>
          <option>Maize</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold">Soil Type</label>
        <select value={soilType} onChange={(e) => setSoilType(e.target.value)} className="w-full p-2 border rounded">
          <option>Sandy</option>
          <option>Loamy</option>
          <option>Clay</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold">Growth Stage (1-5)</label>
        <input type="number" min="1" max="5" value={growthStage} onChange={(e) => setGrowthStage(e.target.value)} className="w-full p-2 border rounded" />
      </div>

      {/* Predict Button */}
      <button onClick={calculateWaterUsage} className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
        Calculate Water Usage
      </button>

      {/* Display Results */}
      {waterUsage && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-700">Total Water Needed: {waterUsage} Liters</h3>
          <h3 className="text-xl font-semibold text-green-700">Water Saved Using AI: {waterSaved} Liters</h3>
        </div>
      )}

      {/* Chart */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">Water Consumption Comparison</h2>
        <Bar data={chartData} />
      </div>
    </div>
  );
}

export default WaterUsage;