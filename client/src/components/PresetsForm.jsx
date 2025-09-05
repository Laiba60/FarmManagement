import React, { useState } from "react";

export default function PresetsForm({ onSave, presets }) {
  const [country, setCountry] = useState("Pakistan");
  const [city, setCity] = useState("Lahore");
  const [areaName, setAreaName] = useState("Tunnel Field");

  const save = () => {
    onSave({ country, city, areaName, createdAt: new Date() });
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h3 className="text-lg font-semibold mb-3">Save Preset</h3>
      <div className="space-y-2">
        <input
          className="w-full border p-2 rounded"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          className="w-full border p-2 rounded"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className="w-full border p-2 rounded"
          value={areaName}
          onChange={(e) => setAreaName(e.target.value)}
        />
        <button
          onClick={save}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Save Preset
        </button>
      </div>

      <h4 className="mt-4 font-semibold">Saved Presets</h4>
      <ul className="list-disc ml-5 text-sm">
        {presets.map((p, i) => (
          <li key={i}>
            {p.country} • {p.city} • {p.areaName}
          </li>
        ))}
      </ul>
    </div>
  );
}
