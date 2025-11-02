import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Routes/Home";
import Sub from "./Routes/Sub";
import { UIScroll } from "./components/UIScroll";

function App() {
  const isProd = process.env.NODE_ENV === 'production';
  return (
    <Router basename={isProd ? '/portfolio2025' : '/'}>
      <UIScroll.ToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub" element={<Sub />} />
      </Routes>
    </Router>
  );
}
export default App;
