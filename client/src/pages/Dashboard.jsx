import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Picturelogo.png";
import { Plus, Trash2,Minus } from "lucide-react";
const Dashboard = () => {
  
  const [engineers, setEngineers] = useState([
    { id: 1, name: "Ali Khan" },
    { id: 2, name: "Sara Ahmed" },
     { id: 2, name: " Ahmed" },
      { id: 2, name: "Ali nAhmed" },
       { id: 2, name: "Sania Ahmed" },
        { id: 2, name: "irsa Ahmed" },
        
  ]);
  const [farmers, setFarmers] = useState([
    { id: 1, name: "Farmer A" },
    { id: 2, name: "Farmer B" },
  ]);

  // Handlers
  const removeRobot = (id) => setRobots(robots.filter(r => r.id !== id));
  const removeEngineer = (id) => setEngineers(engineers.filter(e => e.id !== id));
  
  const updateRobotPrice = (id, newPrice) => {
    setRobots(robots.map(r => r.id === id ? { ...r, price: newPrice } : r));
  }
  

  // Add Farmer
  const addFarmer = () => {
    const newFarmer = {
      id: Date.now(),
      name: `Farmer ${farmers.length + 1}`,
    };
    setFarmers([...farmers, newFarmer]);
  };

  // Remove Farmer
  const removeFarmer = (id) => {
    setFarmers(farmers.filter((farmer) => farmer.id !== id));
  };
   const [price, setPrice] = useState(15000);

  const increasePrice = () => setPrice(price + 1000);
  const decreasePrice = () => setPrice(price - 1000);
   const [robots, setRobots] = useState([
    { id: 1, name: "Robot A", price: 15000 },
    { id: 2, name: "Robot B", price: 12000 },
    { id: 3, name: "Robot C", price: 18000 },
  ]);

  const increasePrices = (id) => {
    setRobots(
      robots.map((robot) =>
        robot.id === id ? { ...robot, price: robot.price + 1000 } : robot
      )
    );
  };

  const decreasePrices = (id) => {
    setRobots(
      robots.map((robot) =>
        robot.id === id ? { ...robot, price: robot.price - 1000 } : robot
      )
    );
  };
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
            <div className="flex items-center gap-3">
  {/* Logo */}
  <div className="h-12 w-12">
    <img
      src={Logo}
      alt="No image"
      className="h-full w-full object-contain"
    />
  </div>

  {/* Text */}
  <h1 className="text-[#0d141c] text-lg font-semibold leading-normal">
    AgriBull
  </h1>
</div>


              {/* Sidebar Links */}
              <div className="flex flex-col gap-2">
                {/* Dashboard Link */}
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e7edf4]">
                  <p className="text-[#0d141c] text-[17px] font-bold">
                    <Link to="/Agritecdashboard">Dashboard</Link>
                  </p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <p className="text-[#0d141c] text-[17px] font-bold">Robots</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <p className="text-[#0d141c] text-[17px] font-bold">Engineers</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <p className="text-[#0d141c] text-[17px] font-bold">Rentals</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <p className="text-[#0d141c] text-[17px] font-bold">Settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="layout-content-container flex flex-col flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#0d141c] tracking-light text-2xl md:text-3xl font-bold leading-tight">
             Owner Dashboard
            </p>
          </div>

          {/* Overview Section */}
          <h2 className="text-[#0d141c] text-lg md:text-2xl font-bold px-4 pb-3 pt-5">Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      
      {/* Robots Card */}
      <div className="flex flex-col gap-2 rounded-lg p-4 border border-[#cedbe8] bg-white shadow">
  <p className="text-base font-medium">Robots</p>
  <p className="text-2xl font-bold">{engineers.length}</p>

  <div className="space-y-2 mt-2">
    {engineers.map((engineer) => (
      <div
        key={engineer.id}
        className="flex justify-between items-center bg-gray-50 p-2 rounded"
      >
        {/* Engineer Name */}
        <p className="text-sm font-medium">{engineer.name}</p>

        {/* Icons */}
        <div className="flex gap-2">
          <button
            onClick={() => addTaskToEngineer(engineer.id)}
            className="text-green-600 hover:text-green-800"
          >
            <Plus size={18} />
          </button>
          <button
            onClick={() => removeEngineer(engineer.id)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    ))}
  </div>

 
</div>

      {/* Engineers Card */}
  

<div className="flex flex-col gap-2 rounded-lg p-4 border border-[#cedbe8] bg-white shadow">
  <p className="text-base font-medium">Engineers</p>
  <p className="text-2xl font-bold">{engineers.length}</p>

  <div className="space-y-2 mt-2">
    {engineers.map((engineer) => (
      <div
        key={engineer.id}
        className="flex justify-between items-center bg-gray-50 p-2 rounded"
      >
        {/* Engineer Name */}
        <p className="text-sm font-medium">{engineer.name}</p>

        {/* Icons */}
        <div className="flex gap-2">
          <button
            onClick={() => addTaskToEngineer(engineer.id)}
            className="text-green-600 hover:text-green-800"
          >
            <Plus size={18} />
          </button>
          <button
            onClick={() => removeEngineer(engineer.id)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    ))}
  </div>

 
</div>


      {/* Farmers Card */}
   <div className="flex flex-col gap-2 rounded-lg p-4 border border-[#cedbe8] bg-white shadow">
  <p className="text-base font-medium">Farmers</p>
  <p className="text-2xl font-bold">{farmers.length}</p>

  <div className="space-y-2 mt-2">
    {farmers.map((farmer) => (
      <div
        key={farmer.id}
        className="flex justify-between items-center bg-gray-50 p-2 rounded"
      >
        {/* Farmer Name */}
        <p className="text-sm font-medium">{farmer.name}</p>

        {/* Icons */}
        <div className="flex gap-2">
          <button
            onClick={() => addFarmer(farmer.id)}   // yeh function aap bana sakti hain
            className="text-green-600 hover:text-green-800"
          >
            <Plus size={18} />
          </button>
          <button
            onClick={() => removeFarmer(farmer.id)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={18} />
            
          </button>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Earnings / Other Card */}
   

 



  
    <div className="flex flex-col gap-4 rounded-lg p-4 border border-[#cedbe8] bg-white shadow">
      <p className="text-base font-medium">Rental Prices</p>

      {robots.map((robot) => (
        <div
          key={robot.id}
          className="flex items-center justify-between border-b pb-2 last:border-none"
        >
          {/* Robot Name & Price */}
          <div>
            <p className="text-sm font-medium">{robot.name}</p>
            <p className="text-lg font-bold">${robot.price.toLocaleString()}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {/* Increase */}
            <div className="relative group">
              <button
                onClick={() => increasePrice(robot.id)}
                className="text-green-600 hover:text-green-800"
              >
                <Plus size={18} />
              </button>
              <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 
                px-2 py-1 text-xs text-white bg-green-600 rounded opacity-0 
                group-hover:opacity-100 transition">
                Increase
              </span>
            </div>

            {/* Decrease */}
            <div className="relative group">
              <button
                onClick={() => decreasePrice(robot.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Minus size={18} />
              </button>
              <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 
                px-2 py-1 text-xs text-white bg-red-600 rounded opacity-0 
                group-hover:opacity-100 transition">
                Decrease
              </span>
            </div>
          </div>
        </div>
      ))}
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
