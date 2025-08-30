import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Picturelogo.png";
import { Plus, Trash2, Minus } from "lucide-react";
import { toast } from "react-toastify";


const Dashboard = () => {
  const [engineers, setEngineers] = useState([
    { id: 1, name: "Ali Khan" },
    { id: 2, name: "Sara Ahmed" },
    { id: 3, name: "Ahmed" },
    { id: 4, name: "Ali nAhmed" },
    { id: 5, name: "Sania Ahmed" },
    { id: 6, name: "Irsa Ahmed" },
  ]);

  const [farmers, setFarmers] = useState([
    { id: 1, name: "Farmer A", priceStatus: "paid" },
    { id: 2, name: "Farmer B", priceStatus: "pending" },
  ]);

  const [robots, setRobots] = useState([
    { id: 1, name: "Robot A", health: 80, status: "Operational", pricePending: false, price: 1500 },
    { id: 2, name: "Robot B", health: 45, status: "Maintenance", pricePending: true, price: 2000 },
    { id: 3, name: "Robot C", health: 20, status: "Repair", pricePending: true, price: 3000 },
    { id: 4, name: "Robot D", health: 60, status: "Idle", pricePending: false, price: 4000 },
  ]);

  const [alerts, setAlerts] = useState([]);

  
  const addAlert = (message) => {
    const id = Date.now();
    setAlerts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    }, 4000);
  };

useEffect(() => {
  robots.forEach(robot => {
    if (robot.health < 50) {
      toast.error(`${robot.name} is low on health!`);
    }
  });

  robots.forEach(robot => {
    if (robot.pricePending) {
      toast.warning(`${robot.name}'s rental price is pending!`);
    }
  });

  farmers.forEach(farmer => {
    if (farmer.priceStatus === "pending") {
      toast.info(`${farmer.name}'s price is pending!`);
    }
  });
}, [robots, farmers]);




  const removeEngineer = (id) => setEngineers(engineers.filter((e) => e.id !== id));
  const addTaskToEngineer = (id) => console.log("Add task to engineer", id);

  const addFarmer = () => {
    const newFarmer = { id: Date.now(), name: `Farmer ${farmers.length + 1}`, priceStatus: "pending" };
    setFarmers([...farmers, newFarmer]);
  };
  const removeFarmer = (id) => setFarmers(farmers.filter((farmer) => farmer.id !== id));

  const increasePrice = (id) =>
    setRobots(robots.map((r) => (r.id === id ? { ...r, price: r.price + 1000 } : r)));
  const decreasePrice = (id) =>
    setRobots(robots.map((r) => (r.id === id ? { ...r, price: r.price - 1000 } : r)));

  const repairRobot = (id) =>
    setRobots(robots.map((r) => (r.id === id ? { ...r, health: Math.min(100, r.health + 20) } : r)));

  const getHealthColor = (health) => {
    if (health > 70) return "bg-green-600";
    if (health > 40) return "bg-yellow-500";
    return "bg-red-600";
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Operational":
        return "bg-green-600";
      case "Maintenance":
        return "bg-yellow-500";
      case "Repair":
        return "bg-red-600";
      case "Idle":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      {/* Sidebar and Main Content */}
      <div className="layout-container flex h-full grow flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="layout-content-container flex flex-col w-full lg:w-80 bg-slate-50 border-r border-gray-200">
          <div className="flex h-full min-h-[300px] lg:min-h-[700px] flex-col justify-between p-4">
            <div className="flex flex-col gap-4 ">
              <div className="flex items-center gap-3 bg-green-700 ">
                <div className="h-12 w-12">
                  <img src={Logo} alt="No image" className="h-full w-full object-contain" />
                </div>
                <h1 className="text-white text-lg font-semibold leading-normal">AgriBull</h1>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e7edf4]">
                  <p className="text-[#0d141c] text-[17px] font-bold"><Link to="/Agritecdashboard">Dashboard</Link></p>
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
            <p className="text-[#0d141c] tracking-light text-2xl md:text-3xl font-bold leading-tight">Owner Dashboard</p>
          </div>

          {/* Alerts */}
          <div className="fixed top-4 right-4 w-80 space-y-2 z-50">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-2 bg-red-600 text-white rounded shadow">{alert.message}</div>
            ))}
          </div>



          {/* Robots / Engineers / Farmers Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {/* Robots */}
            <div className="flex flex-col gap-2 rounded-lg p-4 border border-[#cedbe8] bg-white shadow h-[300px] overflow-y-auto overflow-x-hidden">
              <p className="text-base font-bold">Robots</p>
              <p className="text-2xl font-bold">{robots.length}</p>
              <div className="space-y-2 mt-2">
                {robots.map((robot) => (
                  <div key={robot.id} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <p className="text-sm font-medium">{robot.name}</p>
                    <div className="flex gap-3">
                      <button onClick={() => increasePrice(robot.id)} className="text-green-600 hover:text-green-800 cursor-pointer"><Plus size={18} /></button>
                      <button onClick={() => decreasePrice(robot.id)} className="text-red-600 hover:text-red-800 cursor-pointer"><Trash2 size={18} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineers */}
            <div className="flex flex-col gap-2 rounded-lg p-4 border border-[#cedbe8] bg-white shadow h-[300px] overflow-y-auto overflow-x-hidden">
              <p className="text-base font-bold">Engineers</p>
              <p className="text-2xl font-bold">{engineers.length}</p>
              <div className="space-y-2 mt-2">
                {engineers.map((engineer) => (
                  <div key={engineer.id} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <p className="text-sm font-medium">{engineer.name}</p>
                    <div className="flex gap-2">
                      <button onClick={() => addTaskToEngineer(engineer.id)} className="text-green-600 hover:text-green-800 cursor-pointer"><Plus size={18} /></button>
                      <button onClick={() => removeEngineer(engineer.id)} className="text-red-600 hover:text-red-800 cursor-pointer"><Trash2 size={18} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Farmers */}
            <div className="flex flex-col gap-2 rounded-lg p-4 border border-[#cedbe8] bg-white shadow h-[300px] overflow-y-auto overflow-x-hidden">
              <p className="text-base font-bold">Farmers</p>
              <p className="text-2xl font-bold">{farmers.length}</p>
              <div className="space-y-2 mt-2">
                {farmers.map((farmer) => {
                  const status = farmer.priceStatus ? farmer.priceStatus.toUpperCase() : "N/A";
                  return (
                    <div key={farmer.id} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                      <p className={`text-sm font-medium ${farmer.priceStatus === "pending" ? "text-red-600" : "text-green-600"}`}>
                        {farmer.name} - {status}
                      </p>
                      <div className="flex gap-2">
                        <button onClick={addFarmer} className="text-green-600 hover:text-green-800 cursor-pointer"><Plus size={18} /></button>
                        <button onClick={() => removeFarmer(farmer.id)} className="text-red-600 hover:text-red-800 cursor-pointer"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Rental Prices */}
            <div className="flex flex-col gap-4 rounded-lg p-4 border border-[#cedbe8] bg-white shadow h-[300px] overflow-y-auto overflow-x-hidden">
              <p className="text-base font-bold">Rental Prices</p>
              {robots.map((robot) => (
                <div key={robot.id} className="flex items-center justify-between border-b pb-2 last:border-none">
                  <div>
                    <p className="text-sm font-medium">{robot.name}</p>
                    <p className="text-lg font-bold">${robot.price.toLocaleString()}</p>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => increasePrice(robot.id)} className="text-green-600 hover:text-green-800 cursor-pointer"><Plus size={18} /></button>
                    <button onClick={() => decreasePrice(robot.id)} className="text-red-600 hover:text-red-800 cursor-pointer"><Minus size={18} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* Robot Health & Status */}
          <h2 className="text-[#0d141c] text-lg md:text-2xl font-bold px-4 pb-3 pt-5">Robot Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
            <div className="flex flex-col gap-4 rounded-lg border border-[#cedbe8] p-6 bg-white shadow">
              <p className="text-base font-medium">Robot Availability</p>
              {robots.map((robot) => (
                <div key={robot.id} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{robot.name}</p>
                    <p className={`text-sm font-bold ${getHealthColor(robot.health)} text-white px-2 rounded`}>
                      {robot.health}%
                    </p>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded overflow-hidden">
                    <div className={`${getHealthColor(robot.health)} h-3 transition-all duration-500`} style={{ width: `${robot.health}%` }}></div>
                  </div>
                  <button onClick={() => repairRobot(robot.id)} className="mt-1 px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                    Repair / Boost Health
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 rounded-lg border border-[#cedbe8] p-6 bg-white shadow">
              <p className="text-base font-medium">Robot Status</p>
              {robots.map((robot) => (
                <div key={robot.id} className="flex items-center justify-between">
                  <p className="font-medium">{robot.name}</p>
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${getStatusColor(robot.status)}`}></span>
                    <p>{robot.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
