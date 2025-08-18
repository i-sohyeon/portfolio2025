// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Routes/Home";
import Sub from "./Routes/Sub";

function App() {
  return (
    <Router basename="/portfolio2025">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub" element={<Sub />} />
        {/* 존재하지 않는 경로는 루트로 리다이렉트 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
