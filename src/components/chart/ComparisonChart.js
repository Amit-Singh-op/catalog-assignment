import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const ComparisonChart = ({ compareData }) => (
  <div style={{ height: "100%" }}>
    <ResponsiveContainer>
      <AreaChart data={compareData}>
        <defs>
          <linearGradient id="colorCompare" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff4c4c" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#ff4c4c" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="price"
          stroke="#ff4c4c"
          fillOpacity={1}
          fill="url(#colorCompare)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default ComparisonChart;
