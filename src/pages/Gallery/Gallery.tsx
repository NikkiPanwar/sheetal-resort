import React from "react";
import GalleryComponent from "../../components/Gallery/Gallery";
import "../Rooms/Room.css";

export const GalleryPage: React.FC = () => {
  return (
    <div className="subpage-wrapper">
      <div className="subpage-banner">
        <h1>Photo Gallery</h1>
        <p>A glimpse into life and stays at Kempty View Hotel</p>
      </div>
      <GalleryComponent />
    </div>
  );
};

export default GalleryPage;
