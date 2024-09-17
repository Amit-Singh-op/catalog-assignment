import React from "react";
import { styles } from "../../styles/charts";

const Tabs = () => (
  <nav style={styles.nav}>
    <ul style={styles.navList}>
      <li style={styles.navItem}>Summary</li>
      <li style={{ ...styles.navItem, ...styles.navItemActive }}>Chart</li>
      <li style={styles.navItem}>Statistics</li>
      <li style={styles.navItem}>Analysis</li>
      <li style={styles.navItem}>Settings</li>
    </ul>
  </nav>
);

export default Tabs;
