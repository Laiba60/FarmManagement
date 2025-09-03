import React, { useEffect, useState } from "react";
import RealTimeMonitor from "../components/RealTimeMonitor";
import MissionPlanMap from "../components/missionplanmap";
import Section from "../components/Section";
import Logo from "../assets/images/Picturelogo.png";
import { getEngineers, getBatteryStatus, getChemicalLevel } from "../api";
import { Link } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getRentals, rentNow } from "../api";
const Agritecdashboard = () => {
  const [engineers, setEngineers] = useState([]);
  const [battery, setBattery] = useState(0);
  const [chemical, setChemical] = useState(0);
   const [rentals, setRentals] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const engineersData = await getEngineers();
        setEngineers(engineersData);

        const batteryData = await getBatteryStatus();
        setBattery(batteryData.value); // depends on API response

        const chemicalData = await getChemicalLevel();
        setChemical(chemicalData.value);
      } catch (error) {
        console.error("API fetch error:", error);
      }
    };

    fetchData();
  }, []);
 
  const [chartData, setChartData] = useState([
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 50 },
  { name: 'Mar', value: 45 },
]);
 useEffect(() => {
    const fetchRentals = async () => {
      try {
        const data = await getRentals();
        setRentals(data);
      } catch (err) {
        console.error("Error fetching rentals:", err);
      }
    };
    fetchRentals();
  }, []);
const handleRent = async (plan) => {
  try {
    const payload = {
      userId: "farmer123",
      duration: plan.duration
    };

    const res = await rentNow(plan._id, payload);
    alert(` ${res.message}`);
  } catch (err) {
    const message = err.response?.data?.message || "Error booking rental";
    alert(` ${message}`);
  }
};






  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="flex h-full min-h-[300px] lg:min-h-[700px] flex-col justify-between bg-slate-50 p-4 border-b lg:border-b-0">
            <div className="flex flex-col gap-4">
              {/* Logo */}
            

<div className="flex gap-3 items-center bg-green-700">
  {/* Logo Image */}
    <div className="h-15 w-15">
      <img
        src={Logo}
        alt="No image"
        className="h-full w-full object-contain"
      />
    </div>

  {/* Logo Text */}
 
</div>


              {/* Menu */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e7edf4]">
                 <p className="text-[17px] font-bold">Dashboard</p>

                </div>
                <div className="flex items-center gap-3 px-3 py-2">
                  <p className="text-[17px] font-bold">Missions</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2">
                  <p className="text-[17px] font-bold">Robots</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2">
                  <p className="text-[17px] font-bold">
                    <Link to="/supportchat">Support</Link>
                  </p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2">
                  <p className="text-[17px] font-bold">Account</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex flex-col gap-2">
              <p className="text-[28px] lg:text-[32px] font-bold leading-tight">
               My Dashboard
              </p>
              <p className="text-gray-600 text-[15px] md:text-base font-medium">
                Welcome back, Farmer McGregor
</p>

            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {/* Robot Features */}
            <Section
              title="Robot Features"
              features={[
                {
                  subtitle: "Precision Spraying",
                  title: "Advanced Nozzle Control",
                  desc: "Our robots use advanced nozzle control technology to ensure precise and efficient spraying.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSof2Gwo5mDZH1I6Kc5beEw-z85k1FCMNGymFr8kcUzQSZyZy0NoTX2HQquKA3Ob8ih_OTiplee43r9SKbtBhjrCrO1dZCUCMBJxxRBxIQuZqLZVvGhaw4o7olU7HCrfDbUK2MIpAgmb2Ml4QYQVHH97vQN8R_f64mr81t_ji6V8Qhzbq1eKbIxIAscqabWMBQc0dRnt1pA9pD-OTbWrrscDdnk1wzDdyWbREm3xJOVPMgsSVOEgrvxS8z3RZUz3FMa-3YLE5bwlPR",
                },
                {
                  subtitle: "Autonomous Navigation",
                  title: "GPS-Guided Precision",
                  desc: "Equipped with GPS-guided navigation, our robots autonomously navigate fields with accuracy.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy-eqUAHpr4qWimtoaVpMk0mfL1KWxLL0vRiNHsISAzTe2NTgrGS4fSvwS03RL9EkFtmUWny0mOllKZZZ-dt-00zp4D-nr3PkDjdlP8JoCLcOYl33JtMzs6YmRFIAysnOlq_vf3WnocVUkTSAsVGp5MrQuctM2EZTnU0nlC5Pa1dhTlxiaw1e-xlW52s9B_bq617RZ4iaB5Jxy8N90wbF6PryNZ5cmnTH5g-bmzzukxyn6i1FwZFVmZJrmJeY1V4DLR3RgSHR_Hy1p",
                },
              
              ]}
            />
            <div className="px-4">
  <RealTimeMonitor />
</div>

<div>
      <h2 className="text-[#111418] text-[22px] font-bold px-4 pb-3 pt-5">
       Robot Rental Plan
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4">
        {rentals.map((plan) => (
          <div
            key={plan._id}
            className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-[#dbe0e6] bg-white p-6"
          >
            <div className="flex flex-col gap-1">
              <h1 className="text-[#111418] text-base font-bold leading-tight">
                {plan.duration}
              </h1>
              <p className="flex items-baseline gap-1 text-[#111418]">
                <span className="text-[#111418] text-4xl font-black leading-tight">
                  ${plan.price}
                </span>
                <span className="text-[#111418] text-base font-bold leading-tight">
                  {plan.unit}
                </span>
              </p>
            </div>
            <button
              onClick={() => handleRent(plan)}
              className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold"
            >
              Rent Now
            </button>
            <div className="flex flex-col gap-2">
              {plan.features.map((f, i) => (
                <div
                  key={i}
                  className="text-[13px] flex gap-3 text-[#111418]"
                >
                  ✅ {f}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
           





            {/* Precision Details */}
            <div className="px-4">
      <h2 className="text-[22px] font-bold pb-3">Precision Spraying Details</h2>

      <div className="p-4 border rounded-lg bg-white shadow-md">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#4f46e5"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>

            {/* Engineers List */}
         <div className="px-4">
  <h2 className="text-[22px] font-bold pb-3">Available Farm Engineers</h2>
  
  <div className="max-h-[400px] overflow-y-auto pr-2">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {engineers.map((eng, idx) => (
        <div key={idx} className="p-4 border rounded-lg shadow-sm bg-white">
          <p className="font-bold">{eng.name}</p>
          <p className="text-sm text-gray-600">{eng.expertise}</p>
          <span
            className={`text-xs font-medium px-2 py-1 rounded ${
              eng.status === "Available"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {eng.status}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>


            
 <Section
  title="Mission Planning"
  features={[
    {
      
      title: "Interactive Map",
      desc: "Plan your mission with real-time mapping tools.",
      component: <MissionPlanMap />, 
    },
    
  ]}
  />

          </div>
        </div>
      </div>
    </div>
  );
};





export default Agritecdashboard;
