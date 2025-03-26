import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", rainfall: 120 },
  { month: "Feb", rainfall: 80 },
  { month: "Mar", rainfall: 150 },
  { month: "Apr", rainfall: 200 },
];

const RainfallChart = () => {
  return (
    <div className="p-4 bg-green-200 rounded-2xl shadow-lg">
      <h2 className="text-lg font-bold mb-4">Monthly Rainfall</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="rainfall" fill="#338AFF" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RainfallChart;
