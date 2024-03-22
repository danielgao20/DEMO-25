import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="w-screen relative h-screen min-h-screen min-w-full">
        <div id="grain" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
