import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10 AM", moisture: 55 },
  { time: "12 PM", moisture: 60 },
  { time: "2 PM", moisture: 65 },
  { time: "4 PM", moisture: 50 },
];

const MoistureChart = () => {
  return (
    <div className="p-4 bg-green-200 rounded-2xl shadow-lg">
      <h2 className="text-lg font-bold mb-4">Moisture Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="moisture"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MoistureChart;
