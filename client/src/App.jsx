import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Agritecdashboard from "./pages/Agritecdashboard";
import Home from "./pages/Home";
import SupportChat from "./pages/SupportChat";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Admin-only dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        {/* Farmer-only dashboard */}
        <Route
          path="/Agritecdashboard"
          element={
            <PrivateRoute allowedRoles={['farmer']}>
              <Agritecdashboard />
            </PrivateRoute>
          }
        />

        <Route path="/supportchat" element={<SupportChat />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
