import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import Landing from "./pages/Landing";
import About from "./pages/About";
function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
