import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Sand", value: 40 },
  { name: "Clay", value: 30 },
  { name: "Silt", value: 30 },
];

const COLORS = ["#FF5733", "#338AFF", "#82ca9d"];

const SoilCompositionChart = () => {
  return (
    <div className="p-4 bg-green-200 rounded-2xl shadow-lg">
      <h2 className="text-lg font-bold mb-4">Soil Composition</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SoilCompositionChart;
