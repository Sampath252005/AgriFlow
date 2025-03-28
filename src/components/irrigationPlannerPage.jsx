import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCnTROIII2xrUW6rpzDn_WdRFhiLKuze5I");

function PlantPredictor() {
  const [soilType, setSoilType] = useState("");
  const [plantType, setPlantType] = useState("");
  const [result, setResult] = useState("");
  const [loadingPlant, setLoadingPlant] = useState(false);

  // Fetch irrigation details based on soil & plant type
  const fetchIrrigationDetails = async () => {
    if (!soilType || !plantType) {
      alert("Please enter both soil type and plant type.");
      return;
    }

    setLoadingPlant(true);
    try {      const ai = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      
      const response = await ai.generateContent(
        `give me the market price prediction of the crop ${soilType} and multiply with ${plantType} if it exists otherwise tell me that crop does not exist.`
      );
      const text = await response.response.text();
      setResult(text);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResult("Failed to fetch data.");
    }
    setLoadingPlant(false);
  };

  return (
    <div className="flex flex-col items-center py-10 px-4 min-h-screen bg-green-600 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Crop Management</h1>

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
      </div>
    </div>
  );
}

export default PlantPredictor;
