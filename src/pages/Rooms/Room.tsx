import React from "react";
import RoomsComponent from "../../components/Rooms/Rooms";
import "./Room.css";

export const RoomPage: React.FC = () => {
  return (
    <div className="subpage-wrapper">
      <div className="subpage-banner">
        <h1>Our Rooms &amp; Suites</h1>
        <p>Comfort, convenience, and breathtaking Himalayan views</p>
      </div>
      <RoomsComponent />
    </div>
  );
};

export default RoomPage;
