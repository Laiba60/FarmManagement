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
    <div className="bg-white shadow-md rounded-xl p-4">
      <h3 className="text-lg font-semibold mb-3">Create Mission</h3>

      {area && (
        <div className="border-2 border-dashed h-48 flex items-center justify-center relative rounded-lg">
          <span className="absolute top-2 left-2 text-sm font-medium">
            {area.width_ft}ft × {area.height_ft}ft
          </span>
          <div className="absolute bottom-2 flex gap-2">
            {["left", "right", "top", "bottom"].map((s) => (
              <button
                key={s}
                onClick={() => setSide(s)}
                className={`px-3 py-1 rounded ${
                  side === s ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={createMission}
        className="mt-4 w-full bg-green-600 text-white py-2 rounded"
      >
        Create Mission ({side})
      </button>

      {mission && <SideStatus mission={mission} />}
    </div>
  );
}
