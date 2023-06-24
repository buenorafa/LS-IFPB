"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import markers from "../../assets/popup-location.json";

const customIcon = new Icon({
  iconUrl: "./location-icon.png",
  iconSize: [38, 38],
});
export default function Map() {
  return (
    <MapContainer
      center={[-7.1351608999508835, -34.873484685903584]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ width: 100 + "%", height: 500 + "px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Pins */}
      {markers.map((marker) => (
        <Marker position={marker.location} icon={customIcon}>
          <Popup>
            <h4 className="font-bold">{marker.title}</h4>
            <p>{marker.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
