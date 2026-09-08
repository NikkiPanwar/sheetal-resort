import React from "react";
import RestaurantComponent from "../../components/Restaurant/Restaurant";
import "../Rooms/Room.css";

export const RestaurantPage: React.FC = () => {
  return (
    <div className="subpage-wrapper">
      <div className="subpage-banner">
        <h1>Our Restaurant</h1>
        <p>Authentic North Indian Flavors &amp; Delicious Cuisine</p>
      </div>
      <RestaurantComponent />
    </div>
  );
};

export default RestaurantPage;
