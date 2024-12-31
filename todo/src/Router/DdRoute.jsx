import About from "./About";
import Profiles from "./Profiles";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./route.css";
import { AppContext } from "./AppContext";
function DdRoute() {
  const [state, setState] = useState(100);
  const navigate = useNavigate();

  return (
    <div className="App">
      <button onClick={() => navigate("/about")}>About Me</button>
      <button onClick={() => navigate("/profile")}>Profile</button>
      <AppContext.Provider value={{ data: state }}>
        <Routes>
          {/* Pass component as element */}
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profiles />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default DdRoute;
