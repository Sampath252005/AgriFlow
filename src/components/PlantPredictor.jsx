import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load API Key from Environment Variables
const genAI = new GoogleGenerativeAI("AIzaSyCnTROIII2xrUW6rpzDn_WdRFhiLKuze5I");

function PlantPredictor() {
  const [soilType, setSoilType] = useState("");
  const [plantType, setPlantType] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchIrrigationDetails = async () => {
    if (!soilType || !plantType) {
      alert("Please enter both soil type and plant type.");
      return;
    }

    setLoading(true);
    try {
      const ai = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const response = await ai.generateContent(
        `Suggest an irrigation schedule for ${plantType} in ${soilType} soil give me 4-5 lines and water required with schedule if the plant exist or else tell me such plant dose not exist and same for soil type.`
        // `recomend me only the crop names which would be good to grow in condition 37 d celcius mid humid red soil mid moist soil and ph of 8 only the plant name`
      );

      // ✅ Properly extract AI response text
      const text = response.response.candidates[0]?.content?.parts[0]?.text || "No response from AI.";
      setResult(text);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResult("Failed to fetch data.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🌱 Irrigation AI Assistant</h1>

      <div className="bg-green-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <label className="block mb-2 font-semibold">Soil Type:</label>
        <input
          type="text"
          className="w-full p-2 rounded-lg text-black"
          value={soilType}
          onChange={(e) => setSoilType(e.target.value)}
        />

        <label className="block mt-4 mb-2 font-semibold">Plant Type:</label>
        <input
          type="text"
          className="w-full p-2 rounded-lg text-black"
          value={plantType}
          onChange={(e) => setPlantType(e.target.value)}
        />

        <button
          onClick={fetchIrrigationDetails}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg"
          disabled={loading}
        >
          {loading ? "Fetching..." : "Get Irrigation Schedule"}
        </button>
      </div>

      {result && (
        <div className="bg-green-700 p-4 rounded-lg shadow-lg mt-6 w-full max-w-md">
          <h2 className="text-xl font-bold">📝 AI Recommendation:</h2>
          <p className="mt-2">{result}</p>
        </div>
      )}
    </div>
  );
}

export default PlantPredictor;
