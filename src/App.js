import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Summary from "./components/Summary";
import Statistics from "./components/Statistics";
import Analysis from "./components/Analysis";
import Settings from "./components/Settings";
import CryptoChartComponent from "./components/chart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chart" element={<CryptoChartComponent />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/settings" element={<Settings />} />
        <Route exact path="/" element={<CryptoChartComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
