import React, { useState, useCallback, useEffect } from "react";
import Tabs from "./Tabs";
import PriceDisplay from "./PriceDisplay";
import Controls from "./Controls";
import ChartSection from "./ChartSection";
import { styles } from "../../styles/charts";
import { generateData, timeRanges, updateData } from "../../utils/chartUtils";
import { generateCompareData } from "../../utils/compareUtils";

export default function CryptoChartComponent() {
  const [timeRange, setTimeRange] = useState("1m");
  const [data, setData] = useState(() => generateData(timeRanges["1m"]));
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isComparing, setIsComparing] = useState(false);
  const [hoveredData, setHoveredData] = useState(null);
  const [value, setValue] = useState({ price: 63179.71, volume: 500 });
  const [compareData, setCompareData] = useState(null);

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
    setData(generateData(timeRanges[range]));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const toggleCompare = () => {
    if (!isComparing) {
      setCompareData(generateCompareData(timeRanges[timeRange]));
    } else {
      setCompareData(null);
    }
    setIsComparing(!isComparing);
  };

  const handleMouseMove = useCallback((props) => {
    if (props && props.activePayload) {
      setHoveredData(props.activePayload[0].payload);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { curValue, curVolume } = updateData(value.price, value.volume);
      setValue((prev) => ({ ...prev, price: curValue, volume: curVolume }));
      setData((prevData) => [
        ...prevData,
        { price: curValue, volume: curVolume },
      ]);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [value.price, value.volume]);

  const handleMouseLeave = () => {
    setHoveredData(null);
  };

  return (
    <div
      style={{
        ...styles.container,
        ...(isFullscreen
          ? { height: "100vh", width: "100vw", overflow: "hidden" }
          : {}),
      }}
    >
      <PriceDisplay price={value.price} />
      <Tabs />
      <Controls
        timeRange={timeRange}
        onTimeRangeChange={handleTimeRangeChange}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        isComparing={isComparing}
        onToggleCompare={toggleCompare}
      />
      <ChartSection
        data={data}
        hoveredData={hoveredData}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        compareData={compareData}
        isComparing={isComparing}
      />
    </div>
  );
}
