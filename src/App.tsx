import "./styles/style.scss";

import Home from "./Routes/Home";
import Sub from "./Routes/Sub";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Sub" element={<Sub />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
