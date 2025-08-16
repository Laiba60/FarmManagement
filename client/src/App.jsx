import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";                  // ✅ add this
import Agritecdashboard from "./pages/Agritecdashboard";  // ✅ add this
import SupportChat from "./pages/SupportChat";    // ✅ add this

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Agritecdashboard" element={<Agritecdashboard />} />
        <Route path="/supportchat" element={<SupportChat />} />
      </Routes>
    </Router>
  );
}

export default App;
