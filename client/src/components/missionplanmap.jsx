import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ Fix Leaflet marker icon issue (default icons don’t load correctly in React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const MissionPlanMap = () => {
  // ✅ Example markers (Lahore area)
  const markers = [
    { id: 1, lat: 31.5204, lng: 74.3587, label: "Start Point - Lahore" },
    { id: 2, lat: 31.5304, lng: 74.3687, label: "Waypoint 1" },
    { id: 3, lat: 31.5404, lng: 74.3787, label: "Destination" },
  ];

  return (
    <div className="w-full h-[400px]">
      <MapContainer
        center={[31.525, 74.365]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        {/* ✅ Base map from OpenStreetMap (Free) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {/* ✅ Markers for mission points */}
        {markers.map((m) => (
          <Marker key={m.id} position={[m.lat, m.lng]}>
            <Popup>{m.label}</Popup>
          </Marker>
        ))}

        {/* ✅ Polyline connecting mission path */}
        <Polyline
          positions={markers.map((m) => [m.lat, m.lng])}
          pathOptions={{ color: "blue", weight: 4 }}
        />
      </MapContainer>
    </div>
  );
};

export default MissionPlanMap;
