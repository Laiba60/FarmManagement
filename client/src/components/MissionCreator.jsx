import React, { useEffect, useState, useRef } from "react";
import API from "../api";
import SideStatus from "./SideStatus";

export default function MissionCreator({ farmerId }) {
  const [side, setSide] = useState("right");
  const [mission, setMission] = useState(null);
  const [area, setArea] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    API.get("/api/area").then((r) => setArea(r.data));
  }, []);

  const createMission = async () => {
    const payload = { farmerId, areaId: "area-1", side };
    const res = await API.post("/api/missions", payload);
    setMission({ id: res.data.missionId, side });

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(async () => {
      const s = await API.get(`/api/mission/${res.data.missionId}/status`, {
        params: { side },
      });
      setMission((prev) => ({ ...prev, status: s.data }));
    }, 2000);
  };

  return (
   <div className="bg-white shadow-lg rounded-2xl p-6 transition hover:shadow-xl">
  <h3 className="text-xl font-bold mb-4 text-gray-800"> Create Mission</h3>

  {area && (
    <div className="relative border-2 border-dashed rounded-xl h-52 flex items-center justify-center bg-gray-50">
      <span className="absolute top-2 left-2 text-xs text-gray-600 font-medium">
        {area.width_ft}ft × {area.height_ft}ft
      </span>

      <div className="absolute bottom-3 flex gap-3">
        {["left", "right", "top", "bottom"].map((s) => (
          <button
            key={s}
            onClick={() => setSide(s)}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold capitalize transition ${
              side === s
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {s[0].toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )}

  <button
    onClick={createMission}
    className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
  >
    Create Mission ({side})
  </button>

  {mission && (
    <div className="mt-4">
      <SideStatus mission={mission} />
    </div>
  )}
</div>

  );
}
