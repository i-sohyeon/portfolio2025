// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Route, HashRouter as Router, Routes } from 'react-router-dom';
// GitHub Pages가 서버 리다이렉트 설정을 지원하지 않아 HashRouter로 수정

import Home from "./Routes/Home";
import Sub from "./Routes/Sub";
import { UIScroll } from "./components/UIScroll";

// const basename = process.env.NODE_ENV === 'production' ? "/portfolio2025" : "";

function App() {
  return (
    <Router basename="/">
      {/* 배포할때는 basename="/portfolio2025" 추가, 로컬에서는 삭제 */}
      <UIScroll.ToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub" element={<Sub />} />
      </Routes>
    </Router>
  );
}

export default App;
