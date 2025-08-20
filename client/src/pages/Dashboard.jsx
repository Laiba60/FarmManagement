import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Dashboard = () => {
   const [robots, setRobots] = useState([
    { id: 1, name: "Robot A", price: 5000 },
    { id: 2, name: "Robot B", price: 4500 },
  ]);
  const [engineers, setEngineers] = useState([
    { id: 1, name: "Ali Khan" },
    { id: 2, name: "Sara Ahmed" },
  ]);
  const [farmers, setFarmers] = useState([
    { id: 1, name: "Farmer A" },
    { id: 2, name: "Farmer B" },
  ]);

  // Handlers
  const removeRobot = (id) => setRobots(robots.filter(r => r.id !== id));
  const removeEngineer = (id) => setEngineers(engineers.filter(e => e.id !== id));
  const removeFarmer = (id) => setFarmers(farmers.filter(f => f.id !== id));
  const updateRobotPrice = (id, newPrice) => {
    setRobots(robots.map(r => r.id === id ? { ...r, price: newPrice } : r));
  }
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col lg:flex-row">
        
        {/* Sidebar */}
        <div className="layout-content-container flex flex-col w-full lg:w-80 bg-slate-50 border-r border-gray-200">
          <div className="flex h-full min-h-[300px] lg:min-h-[700px] flex-col justify-between p-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h1 className="text-[#0d141c] text-lg font-semibold leading-normal">FarmTech</h1>
                <p className="text-[#49739c] text-sm">Admin</p>
              </div>

              {/* Sidebar Links */}
              <div className="flex flex-col gap-2">
                {/* Dashboard Link */}
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e7edf4]">
                  <p className="text-[#0d141c] text-sm font-medium">
                    <Link to="/Agritecdashboard">Dashboard</Link>
                  </p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <p className="text-[#0d141c] text-sm font-medium">Robots</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <p className="text-[#0d141c] text-sm font-medium">Engineers</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <p className="text-[#0d141c] text-sm font-medium">Rentals</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <p className="text-[#0d141c] text-sm font-medium">Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="layout-content-container flex flex-col flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#0d141c] tracking-light text-2xl md:text-3xl font-bold leading-tight">
              Dashboard
            </p>
          </div>

          {/* Overview Section */}
          <h2 className="text-[#0d141c] text-lg md:text-2xl font-bold px-4 pb-3 pt-5">Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      
      {/* Robots Card */}
      <div className="flex flex-col gap-2 rounded-lg p-4 border border-[#cedbe8] bg-white shadow">
        <p className="text-base font-medium">Robots</p>
        <p className="text-2xl font-bold">{robots.length}</p>
        <div className="space-y-2 mt-2">
          {robots.map(robot => (
            <div key={robot.id} className="flex justify-between items-center">
              <p className="text-sm">{robot.name}</p>
              <input
                type="number"
                value={robot.price}
                onChange={(e) => updateRobotPrice(robot.id, parseInt(e.target.value))}
                className="w-20 border rounded px-2 py-1 text-sm"
              />
              <button
                onClick={() => removeRobot(robot.id)}
                className="bg-red-500 text-white px-2 py-1 rounded text-xs"
              >Remove</button>
            </div>
          ))}
        </div>
        <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded text-sm">Add Robot</button>
      </div>

      {/* Engineers Card */}
      <div className="flex flex-col gap-2 rounded-lg p-4 border border-[#cedbe8] bg-white shadow">
        <p className="text-base font-medium">Engineers</p>
        <p className="text-2xl font-bold">{engineers.length}</p>
        <div className="space-y-2 mt-2">
          {engineers.map(eng => (
            <div key={eng.id} className="flex justify-between items-center">
              <p className="text-sm">{eng.name}</p>
              <button
                onClick={() => removeEngineer(eng.id)}
                className="bg-red-500 text-white px-2 py-1 rounded text-xs"
              >Remove</button>
            </div>
          ))}
        </div>
        <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded text-sm">Add Engineer</button>
      </div>

      {/* Farmers Card */}
      <div className="flex flex-col gap-2 rounded-lg p-4 border border-[#cedbe8] bg-white shadow">
        <p className="text-base font-medium">Farmers</p>
        <p className="text-2xl font-bold">{farmers.length}</p>
        <div className="space-y-2 mt-2">
          {farmers.map(farmer => (
            <div key={farmer.id} className="flex justify-between items-center">
              <p className="text-sm">{farmer.name}</p>
              <button
                onClick={() => removeFarmer(farmer.id)}
                className="bg-red-500 text-white px-2 py-1 rounded text-xs"
              >Remove</button>
            </div>
          ))}
        </div>
        <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded text-sm">Add Farmer</button>
      </div>

      {/* Earnings / Other Card */}
      <div className="flex flex-col gap-2 rounded-lg p-4 border border-[#cedbe8] bg-white shadow">
        <p className="text-base font-medium">Earnings</p>
        <p className="text-2xl font-bold">$15,000</p>
        <p className="text-[#078838] text-sm font-medium">+15%</p>
      </div>
    </div>

          {/* Robot Health Section */}
          <h2 className="text-[#0d141c] text-lg md:text-2xl font-bold px-4 pb-3 pt-5">Robot Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6">
            
            {/* Robot Availability */}
            <div className="flex flex-col gap-2 rounded-lg border border-[#cedbe8] p-6">
              <p className="text-base font-medium">Robot Availability</p>
              <p className="text-2xl md:text-3xl font-bold">12</p>
              <div className="flex gap-1">
                <p className="text-[#49739c] text-sm">This Month</p>
                <p className="text-[#078838] text-sm font-medium">+10%</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 min-h-[120px] gap-4 items-end justify-items-center px-3">
                <div className="w-full bg-[#e7edf4] border-t-2 border-[#49739c]" style={{ height: "80%" }}></div>
                <div className="w-full bg-[#e7edf4] border-t-2 border-[#49739c]" style={{ height: "80%" }}></div>
                <div className="w-full bg-[#e7edf4] border-t-2 border-[#49739c]" style={{ height: "50%" }}></div>
                <div className="w-full bg-[#e7edf4] border-t-2 border-[#49739c]" style={{ height: "70%" }}></div>
              </div>
            </div>

            {/* Robot Status */}
            <div className="flex flex-col gap-2 rounded-lg border border-[#cedbe8] p-6">
              <p className="text-base font-medium">Robot Status</p>
              <p className="text-2xl md:text-3xl font-bold">5</p>
              <div className="flex gap-1">
                <p className="text-[#49739c] text-sm">This Month</p>
                <p className="text-[#078838] text-sm font-medium">+5%</p>
              </div>
              <div className="grid gap-y-4 grid-cols-[auto_1fr] items-center py-3">
                <p className="text-sm font-bold text-[#49739c]">Operational</p>
                <div className="h-2 bg-[#e7edf4] relative">
                  <div className="bg-[#49739c] h-2" style={{ width: "60%" }}></div>
                </div>
                <p className="text-sm font-bold text-[#49739c]">Maintenance</p>
                <div className="h-2 bg-[#e7edf4] relative">
                  <div className="bg-[#49739c] h-2" style={{ width: "20%" }}></div>
                </div>
                <p className="text-sm font-bold text-[#49739c]">Repair</p>
                <div className="h-2 bg-[#e7edf4] relative">
                  <div className="bg-[#49739c] h-2" style={{ width: "90%" }}></div>
                </div>
                <p className="text-sm font-bold text-[#49739c]">Idle</p>
                <div className="h-2 bg-[#e7edf4] relative">
                  <div className="bg-[#49739c] h-2" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
