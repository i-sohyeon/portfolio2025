// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import Sub from "./Routes/Sub";

function App() {
  return (
    <Router>
      {/* 배포할때는 basename="/portfolio2025" 추가, 로컬에서는 삭제 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub" element={<Sub />} />
      </Routes>
    </Router>
  );
}

export default App;
