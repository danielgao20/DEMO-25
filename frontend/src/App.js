import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import Map from "./views/Map";
import Navbar from "./components/Navbar";
import Startupgrid from "./views/Startupgrid";
import SponsorUs from "./views/SponsorUs";

function App() {
  return (
    <Router>
      <div className="w-screen relative h-screen min-h-screen min-w-full">
        <div id="grain" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/startups" element={<Startupgrid />} />
          <Route path="/sponsorus" element={<SponsorUs />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
