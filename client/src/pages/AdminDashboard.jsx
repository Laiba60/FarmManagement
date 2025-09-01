import React, { useState, useEffect } from "react";
import { useRef} from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Picturelogo.png";
import { Plus, Trash2, Minus } from "lucide-react";
import { toast } from "react-toastify";
import api, {
  getAdminEngineers,
  getAdminFarmers,
  getAdminRobots,
} from "../api";

const AdminDashboard = () => {
  const [engineers, setEngineers] = useState([]);
  const [farmers, setFarmers] = useState([]);
  const [robots, setRobots] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const shownFarmerAlerts = useRef(new Set());

  // 🔹 Load Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [engRes, farmRes, robRes] = await Promise.all([
          getAdminEngineers(),
          getAdminFarmers(),
          getAdminRobots(),
        ]);
        setEngineers(engRes);
        setFarmers(farmRes);
        setRobots(robRes);
      } catch (err) {
        console.error("Error fetching data:", err);
        toast.error("Failed to fetch dashboard data");
      }
    };
    fetchData();
  }, []);

  // 🔹 Alerts
useEffect(() => {
  farmers.forEach((farmer) => {
    // Only show toast if price is pending and not shown before
    if (farmer.priceStatus === "pending" && !shownFarmerAlerts.current.has(farmer._id)) {
      toast.info(`${farmer.name}'s price is pending!`);
      shownFarmerAlerts.current.add(farmer._id);
    }
  });
}, [farmers]);

// ================= CRUD Actions =================

// Engineers
const addEngineer = async () => {
  try {
    const res = await api.post("/admin/engineers", {
      name: `Engineer ${engineers.length + 1}`,
    });
    setEngineers(prev => {
      // prevent duplicates
      const exists = prev.find(e => e._id === res.data._id);
      if (exists) return prev;
      return [...prev, res.data];
    });
    toast.success("Engineer added!");
  } catch {
    toast.error("Failed to add engineer");
  }
};

const removeEngineer = async (id) => {
  try {
    await api.delete(`/admin/engineers/${id}`);
    setEngineers(prev => prev.filter(e => e._id !== id));
    toast.success("Engineer removed!");
  } catch {
    toast.error("Failed to remove engineer");
  }
};

// Farmers
const addFarmer = async () => {
  try {
    const res = await api.post("/admin/farmers", {
      name: `Farmer ${farmers.length + 1}`,
      priceStatus: "pending",
    });
    setFarmers(prev => {
      const exists = prev.find(f => f._id === res.data._id);
      if (exists) return prev;
      return [...prev, res.data];
    });
    toast.success("Farmer added!");
  } catch {
    toast.error("Failed to add farmer");
  }
};

const removeFarmer = async (id) => {
  try {
    await api.delete(`/admin/farmers/${id}`);
    setFarmers(prev => prev.filter(f => f._id !== id));
    toast.success("Farmer removed!");
  } catch {
    toast.error("Failed to remove farmer");
  }
};

// Robots
const addRobot = async () => {
  try {
    const res = await api.post("/admin/robots", {
      name: `Robot ${robots.length + 1}`,
      price: 1000,
      health: 100,
      status: "Idle",
    });
    setRobots(prev => {
      const exists = prev.find(r => r._id === res.data._id);
      if (exists) return prev;
      return [...prev, res.data];
    });
    toast.success("Robot added!");
  } catch {
    toast.error("Failed to add robot");
  }
};

const removeRobot = async (id) => {
  try {
    await api.delete(`/admin/robots/${id}`);
    setRobots(prev => prev.filter(r => r._id !== id));
    toast.success("Robot removed!");
  } catch {
    toast.error("Failed to remove robot");
  }
};

const increasePrice = async (id) => {
    console.log("Robot ID:", id);
  // update UI immediately
  setRobots(prev =>
    prev.map(r => (r._id === id ? { ...r, price: r.price + 1000 } : r))
  );
  try {
    await api.patch(`/admin/robots/${id}`, { price: robots.find(r => r._id === id).price + 1000 });
    toast.success("Price increased!");
  } catch {
    toast.error("Failed to update price on server");
  }
};

const decreasePrice = async (id) => {
  setRobots(prev =>
    prev.map(r => (r._id === id ? { ...r, price: r.price - 1000 } : r))
  );
  try {
    await api.patch(`/admin/robots/${id}`, { price: robots.find(r => r._id === id).price - 1000 });
    toast.success("Price decreased!");
  } catch {
    toast.error("Failed to update price on server");
  }
};

const repairRobot = async (id) => {
  setRobots(prev =>
    prev.map(r =>
      r._id === id ? { ...r, health: Math.min(100, r.health + 20) } : r
    )
  );
  try {
    await api.patch(`/admin/robots/${id}`, { health: robots.find(r => r._id === id).health + 20 });
    toast.success("Robot repaired!");
  } catch {
    toast.error("Failed to repair robot");
  }
};
// ================= Helpers =================
const getHealthColor = (health) =>
  health > 70 ? "bg-green-600" : health > 40 ? "bg-yellow-500" : "bg-red-600";

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



  // ================= Render =================
  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="layout-content-container flex flex-col w-full lg:w-80 bg-slate-50 border-r border-gray-200">
          <div className="flex h-full min-h-[300px] lg:min-h-[700px] flex-col justify-between p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 bg-green-700">
                <div className="h-12 w-12">
                  <img
                    src={Logo}
                    alt="No image"
                    className="h-full w-full object-contain"
                  />
                </div>
                <h1 className="text-white text-lg font-semibold leading-normal">
                  AgriBull
                </h1>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e7edf4]">
                  <p className="text-[#0d141c] text-[17px] font-bold">
                    <Link to="/Agritecdashboard">Dashboard</Link>
                  </p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <p className="text-[#0d141c] text-[17px] font-bold">Robots</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <p className="text-[#0d141c] text-[17px] font-bold">
                    Engineers
                  </p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <p className="text-[#0d141c] text-[17px] font-bold">
                    Rentals
                  </p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <p className="text-[#0d141c] text-[17px] font-bold">
                    Settings
                  </p>
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

          {/* Alerts */}
          <div className="fixed top-4 right-4 w-80 space-y-2 z-50">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="p-2 bg-red-600 text-white rounded shadow"
              >
                {alert.message}
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {/* Robots */}
            <div className="flex flex-col gap-2 rounded-lg p-4 border border-[#cedbe8] bg-white shadow h-[300px] overflow-y-auto overflow-x-hidden">
              <p className="text-base font-bold">Robots</p>
              <p className="text-2xl font-bold">{robots.length}</p>
              <button
                onClick={addRobot}
                className="mt-1 px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
              >
                ➕ Add Robot
              </button>
              <div className="space-y-2 mt-2">
                {robots.map((robot) => (
                  <div
                    key={robot._id}
                    className="flex justify-between items-center bg-gray-50 p-2 rounded"
                  >
                    <p className="text-sm font-medium">{robot.name}</p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => increasePrice(robot._id)}
                        className="text-green-600 hover:text-green-800 cursor-pointer"
                      >
                        <Plus size={18} />
                      </button>
                      <button
                        onClick={() => removeRobot(robot._id)}
                        className="text-red-600 hover:text-red-800 cursor-pointer"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineers */}
            <div className="flex flex-col gap-2 rounded-lg p-4 border border-[#cedbe8] bg-white shadow h-[300px] overflow-y-auto overflow-x-hidden">
              <p className="text-base font-bold">Engineers</p>
              <p className="text-2xl font-bold">{engineers.length}</p>
              <button
                onClick={addEngineer}
                className="mt-1 px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
              >
                ➕ Add Engineer
              </button>
              <div className="space-y-2 mt-2">
                {engineers.map((engineer) => (
                  <div
                    key={engineer._id}
                    className="flex justify-between items-center bg-gray-50 p-2 rounded"
                  >
                    <p className="text-sm font-medium">{engineer.name}</p>
                    <button
                      onClick={() => removeEngineer(engineer._id)}
                      className="text-red-600 hover:text-red-800 cursor-pointer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Farmers */}
            <div className="flex flex-col gap-2 rounded-lg p-4 border border-[#cedbe8] bg-white shadow h-[300px] overflow-y-auto overflow-x-hidden">
              <p className="text-base font-bold">Farmers</p>
              <p className="text-2xl font-bold">{farmers.length}</p>
              <button
                onClick={addFarmer}
                className="mt-1 px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
              >
                ➕ Add Farmer
              </button>
              <div className="space-y-2 mt-2">
                {farmers.map((farmer) => {
                  const status = farmer.priceStatus
                    ? farmer.priceStatus.toUpperCase()
                    : "N/A";
                  return (
                    <div
                      key={farmer._id}
                      className="flex justify-between items-center bg-gray-50 p-2 rounded"
                    >
                      <p
                        className={`text-sm font-medium ${
                          farmer.priceStatus === "pending"
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        {farmer.name} - {status}
                      </p>
                      <button
                        onClick={() => removeFarmer(farmer._id)}
                        className="text-red-600 hover:text-red-800 cursor-pointer"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Rental Prices */}
            <div className="flex flex-col gap-4 rounded-lg p-4 border border-[#cedbe8] bg-white shadow h-[300px] overflow-y-auto overflow-x-hidden">
              <p className="text-base font-bold">Rental Prices</p>
              {robots.map((robot) => (
                <div
                  key={robot._id}
                  className="flex items-center justify-between border-b pb-2 last:border-none"
                >
                  <div>
                    <p className="text-sm font-medium">{robot.name}</p>
                    <p className="text-lg font-bold">
                     ${robot.price?.toLocaleString() || "0"}

                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => increasePrice(robot._id)}
                      className="text-green-600 hover:text-green-800 cursor-pointer"
                    >
                      <Plus size={18} />
                    </button>
                    <button
                      onClick={() => decreasePrice(robot._id)}
                      className="text-red-600 hover:text-red-800 cursor-pointer"
                    >
                      <Minus size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Robot Health & Status */}
          <h2 className="text-[#0d141c] text-lg md:text-2xl font-bold px-4 pb-3 pt-5">
            Robot Health
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
            <div className="flex flex-col gap-4 rounded-lg border border-[#cedbe8] p-6 bg-white shadow">
              <p className="text-base font-medium">Robot Availability</p>
              {robots.map((robot) => (
                <div key={robot._id} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{robot.name}</p>
                    <p
                      className={`text-sm font-bold ${getHealthColor(
                        robot.health
                      )} text-white px-2 rounded`}
                    >
                      {robot.health}%
                    </p>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded overflow-hidden">
                    <div
                      className={`${getHealthColor(
                        robot.health
                      )} h-3 transition-all duration-500`}
                      style={{ width: `${robot.health}%` }}
                    ></div>
                  </div>
                  <button
                    onClick={() => repairRobot(robot._id)}
                    className="mt-1 px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                  >
                    Repair / Boost Health
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 rounded-lg border border-[#cedbe8] p-6 bg-white shadow">
              <p className="text-base font-medium">Robot Status</p>
              {robots.map((robot) => (
                <div
                  key={robot._id}
                  className="flex items-center justify-between"
                >
                  <p className="font-medium">{robot.name}</p>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${getStatusColor(
                        robot.status
                      )}`}
                    ></span>
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

export default AdminDashboard;
