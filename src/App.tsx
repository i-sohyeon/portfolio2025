// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import Sub from "./Routes/Sub";

function App() {
  return (
    <Router basename="/portfolio2025">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub" element={<Sub />} />
      </Routes>
    </Router>
  );
}

export default App;
