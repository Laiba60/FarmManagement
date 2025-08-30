import { useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { createMission } from "../api";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const ClickHandler = ({ onClick }) => {
  useMapEvents({
    click(e) {
      console.log(" Map clicked at:", e.latlng);
      onClick(e);
    },
  });
  return null;
};

const MissionPlanMap = () => {
  const [markers, setMarkers] = useState([]);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setMarkers((prev) => [
      ...prev,
      { lat, lng, label: `Point ${prev.length + 1}` },
    ]);
  };

 const handleSaveMission = async () => {
  if (markers.length < 2) {
    alert(" Please add at least 2 points to create a mission.");
    return;
  }

  try {
    const missionData = {
      name: "User Mission",
      points: markers,
    };

    const mission = await createMission(missionData); 
    console.log("Mission Response:", mission);

    alert(" Mission saved: " + mission.name);
  } catch (err) {
    console.error("Save Mission Error:", err);
    alert(" Error saving mission");
  }
};


  return (
    <div>
      <div className="w-full h-[400px]">
        <MapContainer
          center={[31.525, 74.365]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <ClickHandler onClick={handleMapClick} />

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          {markers.map((m, i) => (
            <Marker key={i} position={[m.lat, m.lng]}>
              <Popup>{m.label}</Popup>
            </Marker>
          ))}

          {markers.length > 1 && (
            <Polyline
              positions={markers.map((m) => [m.lat, m.lng])}
              pathOptions={{ color: "blue", weight: 4 }}
            />
          )}
        </MapContainer>
      </div>

      <button
        onClick={handleSaveMission}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save Mission
      </button>
    </div>
  );
};

export default MissionPlanMap;
