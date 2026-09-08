import React from "react";
import LocationComponent from "../../components/Location/Location";
import "../Rooms/Room.css";

export const LocationPage: React.FC = () => {
  return (
    <div className="subpage-wrapper">
      <div className="subpage-banner">
        <h1>Location &amp; Directions</h1>
        <p>Easily accessible along Kempty Fall Road, Mussoorie</p>
      </div>
      <div style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px" }}>
        <LocationComponent />
      </div>
    </div>
  );
};

export default LocationPage;
