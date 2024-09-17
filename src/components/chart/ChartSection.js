import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  ReferenceLine,
} from "recharts";
import { styles } from "../../styles/charts";
import ComparisonChart from "./ComparisonChart";

const ChartSection = ({
  data,
  hoveredData,
  onMouseMove,
  onMouseLeave,
  compareData,
  isComparing,
}) => (
  <div style={styles.chartContainer}>
    <div style={styles.chartWrapper}>
      <div style={styles.areaChart}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4c6fff" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#4c6fff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" hide />
            <YAxis domain={["dataMin", "dataMax"]} hide />
            <Tooltip content={() => null} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#4c6fff"
              fillOpacity={1}
              fill="url(#colorPrice)"
            />
            {hoveredData && (
              <ReferenceLine
                y={hoveredData.price}
                stroke="#4c6fff"
                strokeDasharray="3"
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
        {hoveredData && (
          <div style={styles.hoverValue}>
            {hoveredData.price.toFixed(2)} USD
          </div>
        )}
      </div>

      {isComparing && compareData && (
        <ComparisonChart compareData={compareData} />
      )}

      <div style={styles.barChart}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar dataKey="volume" fill="#e0e0ff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default ChartSection;
