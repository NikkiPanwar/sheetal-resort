import React from "react";
import { MapPinIcon, PhoneIcon } from "../common/Icons";
import { contactDetails } from "../../data/hotelData";
import "./Location.css";

export const Location: React.FC = () => {
  return (
    <div id="location" className="location-card-widget">
      <div className="location-card-header">
        <span className="section-tag">OUR LOCATION</span>
        <h3 className="location-title">Find Us Near Kempty Falls</h3>
      </div>

      <div className="location-meta-list">
        <div className="location-meta-item">
          <span className="meta-icon-gold">
            <MapPinIcon size={20} />
          </span>
          <span className="meta-text">{contactDetails.address}</span>
        </div>

        <div className="location-meta-item">
          <span className="meta-icon-gold">
            <PhoneIcon size={18} />
          </span>
          <a href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`} className="meta-phone-link">
            {contactDetails.phone}
          </a>
        </div>
      </div>

      {/* Map visualizer */}
      <div className="location-map-container">
        <iframe
          title="Kempty Falls Location Map"
          className="location-map-iframe"
          src="https://maps.google.com/maps?q=Kempty%20Falls,%20Mussoorie,%20Uttarakhand&t=&z=14&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          allowFullScreen
        ></iframe>
        <a
          href="https://maps.google.com/?q=Kempty+Falls+Mussoorie"
          target="_blank"
          rel="noopener noreferrer"
          className="map-open-directions-btn"
        >
          Open in Google Maps ↗
        </a>
      </div>
    </div>
  );
};

export default Location;
