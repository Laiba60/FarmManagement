// src/components/RealTimeMonitor.jsx
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '250px'
};

const center = { lat: 31.5204, lng: 74.3587 }; // default Lahore center

const RealTimeMonitor = () => {
  const [data, setData] = useState([{ time: "0s", battery: 100, chemical: 100 }]);
  const [location, setLocation] = useState(center);

  // Google Maps API loader
  const { isLoaded } = useJsApiLoader({ googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY });


  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const last = prev[prev.length - 1];
        const newTime = `${parseInt(last.time) + 5}s`;
        const newBattery = Math.max(last.battery - Math.random() * 2, 0);
        const newChemical = Math.max(last.chemical - Math.random() * 3, 0);

        // Simulate GPS movement
        setLocation(prevLoc => ({
          lat: prevLoc.lat + (Math.random() - 0.5) * 0.0005,
          lng: prevLoc.lng + (Math.random() - 0.5) * 0.0005
        }));

        return [...prev, { time: newTime, battery: newBattery, chemical: newChemical }].slice(-10);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md space-y-4">
      <h2 className="text-[20px] font-bold">Live Robot Monitoring</h2>

      {/* Graph */}
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line type="monotone" dataKey="battery" stroke="#4f46e5" strokeWidth={2} />
          <Line type="monotone" dataKey="chemical" stroke="#16a34a" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      {/* Status Info */}
      <div className="flex justify-around text-sm font-medium">
        <div>Battery: {data[data.length - 1].battery.toFixed(0)}%</div>
        <div>Chemical: {data[data.length - 1].chemical.toFixed(0)}%</div>
        <div>Location: {location.lat.toFixed(5)}, {location.lng.toFixed(5)}</div>
      </div>

      {/* Map */}
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={18}>
          <Marker position={location} />
        </GoogleMap>
      )}
    </div>
  );
};

export default RealTimeMonitor;
