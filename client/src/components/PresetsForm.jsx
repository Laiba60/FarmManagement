import React, { useState } from "react";

export default function PresetsForm({ onSave, presets }) {
  const [country, setCountry] = useState("Pakistan");
  const [city, setCity] = useState("Lahore");
  const [areaName, setAreaName] = useState("Tunnel Field");

  const save = () => {
    onSave({ country, city, areaName, createdAt: new Date() });
  };

  return (
   <div className="bg-white shadow-lg rounded-2xl p-6 transition hover:shadow-xl">
  <h3 className="text-xl font-bold mb-4 text-gray-800"> Save Preset</h3>

  <div className="space-y-4">
    <div>
      <label className="text-sm font-medium text-gray-600">Country</label>
      <input
        className="w-full border border-gray-300 p-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
    </div>

    <div>
      <label className="text-sm font-medium text-gray-600">City</label>
      <input
        className="w-full border border-gray-300 p-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>

    <div>
      <label className="text-sm font-medium text-gray-600">Area Name</label>
      <input
        className="w-full border border-gray-300 p-2 rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
        value={areaName}
        onChange={(e) => setAreaName(e.target.value)}
      />
    </div>

    <button
      onClick={save}
      className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-md hover:opacity-90 transition"
    >
      Save Preset
    </button>
  </div>

  {presets.length > 0 && (
    <div className="mt-6">
      <h4 className="font-semibold text-gray-700 mb-2">Saved Presets</h4>
      <ul className="space-y-2">
        {presets.map((p, i) => (
          <li
            key={i}
            className="p-3 bg-gray-100 rounded-lg shadow-sm text-sm text-gray-700"
          >
            🌍 {p.country} • 🏙️ {p.city} • 🌱 {p.areaName}
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

  );
}
