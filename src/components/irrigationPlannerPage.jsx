import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCnTROIII2xrUW6rpzDn_WdRFhiLKuze5I");

function PlantPredictor() {
  const [soilType, setSoilType] = useState("");
  const [plantType, setPlantType] = useState("");
  const [stateName, setStateName] = useState("");
  const [regionName, setRegionName] = useState("");
  const [result, setResult] = useState("");
  const [locationResult, setLocationResult] = useState("");
  const [loadingPlant, setLoadingPlant] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);

  // Fetch irrigation details based on soil & plant type
  const fetchIrrigationDetails = async () => {
    if (!soilType || !plantType) {
      alert("Please enter both soil type and plant type.");
      return;
    }

    setLoadingPlant(true);
    try {
      const ai = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const response = await ai.generateContent(
        `On the basis of ${plantType} in ${soilType} soil, give me 4-5 lines of details about water-required. If the soil type or plant type does not exist, return an error message.`
      );
      const text = await response.response.text();
      setResult(text);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResult("Failed to fetch data.");
    }
    setLoadingPlant(false);
  };

  // Fetch location details based on state & region name
  const fetchLocationDetails = async () => {
    if (!stateName || !regionName) {
      alert("Please enter both state name and region name.");
      return;
    }

    setLoadingLocation(true);
    try {
      const ai = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const response = await ai.generateContent(
        `If the region ${regionName} exists in ${stateName}, give me the top 5 crops that can be grown there (line by line). If not, return 'Invalid inputs'.`
      );
      const text = await response.response.text();
      setLocationResult(text);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setLocationResult("Failed to fetch data.");
    }
    setLoadingLocation(false);
  };

  return (
    <div className="flex flex-col items-center pt-20  min-h-screen bg-green-600 text-white ">
      <h1 className="text-3xl font-bold mb-6">🌱 Irrigation AI Assistant</h1>

      <div className="flex flex-col md:flex-row gap-20">
        {/* Soil & Plant Section */}
        <div className=" bg-green-700 p-6 rounded-lg shadow-lg w-full max-w-md min-h-[400px] mt-[20px] mr-[100px]">
          <h2 className="text-2xl font-bold mb-4">Soil & Plant Info</h2>
          <label className="block mb-2 font-semibold">Soil Type:</label>
          <input
            type="text"
            className="w-full p-2 rounded-lg text-black bg-white"
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
          />

          <label className="block mt-4 mb-2 font-semibold">Plant Type:</label>
          <input
            type="text"
            className="w-full p-2 rounded-lg text-black bg-white"
            value={plantType}
            onChange={(e) => setPlantType(e.target.value)}
          />

          <button
            onClick={fetchIrrigationDetails}
            className=" w-full bg-green-600 hover:bg-green-800 text-white font-bold py-2 rounded-lg mt-[100px]"
            disabled={loadingPlant}
          >
            {loadingPlant ? "Fetching..." : "Get Irrigation Schedule"}
          </button>

          {result && (
            <div className="bg-green-700 p-4 rounded-lg shadow-lg mt-6">
              <h2 className="text-xl font-bold">📝 AI Recommendation:</h2>
              <p className="mt-2">{result}</p>
            </div>
          )}
        </div>

        {/* State & Region Section */}
        <div className="bg-green-700 p-6 rounded-lg shadow-lg w-full max-w-md mt-[20px] ml-[100px]">
          <h2 className="text-2xl font-bold mb-4">State & Region Info</h2>
          <label className="block mb-2 font-semibold">State Name:</label>
          <input
            type="text"
            className="w-full p-2 rounded-lg text-black bg-white"
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
          />

          <label className="block mt-4 mb-2 font-semibold">Region Name:</label>
          <input
            type="text"
            className="w-full p-2 rounded-lg text-black bg-white"
            value={regionName}
            onChange={(e) => setRegionName(e.target.value)}
          />

          <button
            onClick={fetchLocationDetails}
            className="w-full bg-green-600 hover:bg-green-800 text-white font-bold py-2 rounded-lg mt-[100px]"
            disabled={loadingLocation}
          >
            {loadingLocation ? "Fetching..." : "Get Region Details"}
          </button>

          {locationResult && (
            <div className="bg-green-700 p-4 rounded-lg shadow-lg mt-6">
              <h2 className="text-xl font-bold">📍 Location Info:</h2>
              <p className="mt-2">{locationResult}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlantPredictor;
