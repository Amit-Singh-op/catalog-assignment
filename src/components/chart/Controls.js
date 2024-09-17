import React from "react";
import { timeRanges } from "../../utils/chartUtils";
import { styles } from "../../styles/charts";

const Controls = ({
  timeRange,
  onTimeRangeChange,
  isFullscreen,
  onToggleFullscreen,
  isComparing,
  onToggleCompare,
}) => (
  <div style={styles.controls}>
    <div>
      <button style={styles.button} onClick={onToggleFullscreen}>
        <span style={{ marginRight: "5px" }}>⤢</span>
        {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
      </button>
      <button style={styles.button} onClick={onToggleCompare}>
        {isComparing ? "Remove Comparison" : "+ Compare"}
      </button>
    </div>
    <div>
      {Object.keys(timeRanges).map((period) => (
        <button
          key={period}
          style={
            period === timeRange
              ? { ...styles.timeSelector, ...styles.timeSelectorActive }
              : styles.timeSelector
          }
          onClick={() => onTimeRangeChange(period)}
        >
          {period}
        </button>
      ))}
    </div>
  </div>
);

export default Controls;
