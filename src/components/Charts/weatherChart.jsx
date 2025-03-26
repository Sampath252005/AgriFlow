import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "10 AM", temperature: 28, moisture: 55 },
  { time: "12 PM", temperature: 30, moisture: 60 },
  { time: "2 PM", temperature: 32, moisture: 65 },
  { time: "4 PM", temperature: 35, moisture: 50 },
];

const WeatherChart = () => {
  return (
    <div className="p-4 bg-green-200 rounded-2xl shadow-lg">
      <h2 className="text-lg font-bold mb-4">Weather Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="temperature" stroke="#FF5733" strokeWidth={2} />
          <Line type="monotone" dataKey="moisture" stroke="#338AFF" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
