import L from "leaflet";
import movingImg from "./assets/green.png"
import idleImg from "./assets/red.png"

// Green icon for moving ships
export const movingIcon = new L.Icon({
    iconUrl: movingImg,
    iconSize: [50, 50],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});

// Red icon for idle ships
export const idleIcon = new L.Icon({
    iconUrl: idleImg,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});