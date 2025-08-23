import { GoogleMap, Marker, Polyline, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";

const MissionPlanMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
 // <-- Add your API key here
  });

  const [markers, setMarkers] = useState([
    { id: 1, lat: 31.5204, lng: 74.3587 }, // Example: Lahore
    { id: 2, lat: 31.5304, lng: 74.3687 },
  ]);

  const mapContainerStyle = {
    width: "100%",
    height: "300px",
  };

  const center = { lat: 31.525, lng: 74.36 };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={14}>
      {markers.map((m) => (
        <Marker key={m.id} position={{ lat: m.lat, lng: m.lng }} />
      ))}
      <Polyline
        path={markers.map((m) => ({ lat: m.lat, lng: m.lng }))}
        options={{ strokeColor: "#4f46e5", strokeWeight: 4 }}
      />
    </GoogleMap>
  ) : (
    <p>Loading Map...</p>
  );
};

export default MissionPlanMap;
