import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import Agritecdashboard from "./pages/Agritecdashboard";
import SupportChat from "./pages/SupportChat";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/Agritecdashboard" element={<Agritecdashboard />} />
        <Route path="/supportchat" element={<SupportChat />} />
      </Routes>

     
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
