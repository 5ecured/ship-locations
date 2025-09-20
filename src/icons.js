import L from "leaflet";

// Green icon for moving ships
export const movingIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/743/743922.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});

// Red icon for idle ships
export const idleIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});