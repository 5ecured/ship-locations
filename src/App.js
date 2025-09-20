import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { movingIcon, idleIcon } from "./icons";
import { formatDateWithAgo } from "./utils";

const API_URL = process.env.REACT_APP_API

function App() {
  const [ships, setShips] = useState([]);

  const fetchShips = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setShips(data.data);
    } catch (err) {
      console.error("Error fetching ship data:", err);
    }
  };

  useEffect(() => {
    fetchShips();

    // Refresh every 75 minutes (1h15m)
    const interval = setInterval(fetchShips, 75 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[0.7893, 113.9213]} // on refresh, it shows this instead of world map
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        {/* OpenStreetMap tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Ship markers */}
        {ships && ships?.length > 0 &&
          ships?.map((ship, i) => (
            ship.Lat != null && ship.Lon != null && (
              <Marker
                key={i}
                position={[ship.Lat, ship.Lon]}
                icon={ship.Status.toLowerCase() === "moving" ? movingIcon : idleIcon}
              >
                <Popup>
                  <strong>{ship.VName}</strong> <br />
                  Status: {ship.Status} <br />
                  Speed: {ship.Speed} knots <br />
                  Last update: {formatDateWithAgo(ship.DateTime)}
                </Popup>
              </Marker>
            )
          ))
        }

      </MapContainer>
    </div>
  );
}

export default App;
