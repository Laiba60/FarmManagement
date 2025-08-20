import React, { useEffect, useState } from "react";
import RealTimeMonitor from "../components/RealTimeMonitor";


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
const Agritecdashboard = () => {
 
  const [engineers, setEngineers] = useState([]);
  const [battery, setBattery] = useState(72); 
  const [chemical, setChemical] = useState(65); 
  const data = [
    { name: "Remaining Spray", value: 65 },
    { name: "Robot Battery Status", value: 80 },
    { name: "Previous Work", value: 20 },
     { name: "Remaining Chemical", value: 80 },
  ];
  useEffect(() => {
    
    setEngineers([
      { name: "Ali Khan", expertise: "Drone Navigation", status: "Available" },
      { name: "Sara Ahmed", expertise: "Chemical Spraying", status: "Available" },
      { name: "John Doe", expertise: "Robotics Engineer", status: "Busy" },
      { name: "John Doe", expertise: "Robotics Engineer", status: "Busy" },
      { name: "John Doe", expertise: "Robotics Engineer", status: "Busy" },
      { name: "John Doe", expertise: "Robotics Engineer", status: "Busy" },
      { name: "John Doe", expertise: "Robotics Engineer", status: "Busy" },
    
         { name: "John Doe", expertise: "Robotics Engineer", status: "Busy" },
      { name: "John Doe", expertise: "Robotics Engineer", status: "Busy" },
      { name: "John Doe", expertise: "Robotics Engineer", status: "Busy" },
                      
    ]);
  }, []);

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
              <div className="flex gap-3 items-center">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBubDXRc5dGvENw1Bh-eXC4T4Y741f9lkVY7sUmP3TitxaYOhYSKsn6RKVgipuvBxRZrCuairzIZFyyHJUG5VpZZfOKsx71TxEXfn8UJuO1D6uJqO3XkGbI50t_GVrQrYqWlldPIxnmo1uz4lw61iRDCzzDnp7rnTfCxsZMbnkvfKsfx9y6tOKAaptq9GpsSlEdsliZttg2OuKt8k40hdQ3g-4ZziQWWFwzwpUNAbK6IENhzfiDKBJYlc8km-D_GJsM5QQjdPxRk8z8")',
                  }}
                ></div>
                <a
                  href="/"
                  className="text-[#0d141c] text-base font-medium leading-normal"
                >
                  AgriTech Solutions
                </a>
              </div>

              {/* Menu */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e7edf4]">
                  <p className="text-sm font-medium">Dashboard</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2">
                  <p className="text-sm font-medium">Missions</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2">
                  <p className="text-sm font-medium">Robots</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2">
                  <p className="text-sm font-medium">
                    <Link to="/supportchat">Support</Link>
                  </p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2">
                  <p className="text-sm font-medium">Account</p>
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
                Dashboard
              </p>
              <p className="text-[#49739c] text-sm">Welcome back, Farmer McGregor</p>
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

            {/* Precision Details */}
            <div className="px-4">
      <h2 className="text-[22px] font-bold pb-3">Precision Spraying Details</h2>

      <div className="p-4 border rounded-lg bg-white shadow-md">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            data={data}
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


            {/* Mission Planning */}
            <Section
              title="Mission Planning"
              features={[
                {
                  title: "Plan Your Next Mission",
                  desc: "Easily plan your next spraying mission with our intuitive mission planning tool.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClOBnLC3IgzPFeh0_qGG37gnOAMzauYEEEXh9ijdhhvSsByLcmH5g87ISsrH4Y46eryaUFyfJ2fDspV7cUi7itAPpyUOibYPwGFEQKN_yZK_2WBh-3I0bEC-APR0WXhO0iZ4g9K0DLhPs9DH7te8iQr9tuCFXNRxGKHKBPVRkPmts4pV7GXTA3k2OwGBN_KD19CYEIFBA55TLvIJPjx88kYYHM3AoyhD9Oto5ukG4h3pi1wN1W0tz4UAc3ZD6EWprLQiJX_0QzuDQM",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, features }) => (
  <div className="px-4">
    <h2 className="text-[22px] font-bold pb-3">{title}</h2>
    <div className="space-y-6">
      {features.map((f, i) => (
        <div
          key={i}
          className="flex flex-col lg:flex-row gap-4 rounded-lg"
        >
          <div className="flex flex-col flex-1 gap-1">
            {f.subtitle && <p className="text-sm text-[#49739c]">{f.subtitle}</p>}
            <p className="text-base font-bold">{f.title}</p>
            <p className="text-sm text-[#49739c]">{f.desc}</p>
          </div>
          <div
            className="w-full lg:w-1/2 bg-center bg-cover rounded-lg aspect-video"
            style={{ backgroundImage: `url("${f.img}")` }}
          ></div>
        </div>
      ))}
    </div>
  </div>
);

export default Agritecdashboard;
