import React from "react";
import { styles } from "../../styles/charts";

const PriceDisplay = ({ price }) => (
  <div style={styles.priceDisplay}>
    <div style={styles.mainPrice}>
      {price}
      <span style={styles.currency}>USD</span>
    </div>
    <div style={styles.priceChange}>+2,161.42 (3.54%)</div>
  </div>
);

export default PriceDisplay;
