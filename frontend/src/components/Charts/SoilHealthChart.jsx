import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

const data = [
  { parameter: "pH", value: 6.5 },
  { parameter: "Moisture", value: 70 },
  { parameter: "Nitrogen", value: 50 },
  { parameter: "Phosphorus", value: 40 },
  { parameter: "Potassium", value: 60 },
];

const SoilHealthChart = () => {
  return (
    <div className="p-4 bg-green-200 rounded-2xl shadow-lg">
      <h2 className="text-lg font-bold mb-4">Soil Health Analysis</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="parameter" />
          <PolarRadiusAxis />
          <Radar name="Soil Quality" dataKey="value" stroke="#FF5733" fill="#FF5733" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SoilHealthChart;
