import React from "react";
import { CheckIcon } from "../common/Icons";
import { restaurantHighlights, foodItems } from "../../data/hotelData";
import "./Restaurant.css";

interface RestaurantProps {
  onEnquire?: (topic: string) => void;
}

export const Restaurant: React.FC<RestaurantProps> = ({ onEnquire }) => {
  const handleEnquire = () => {
    if (onEnquire) {
      onEnquire("Restaurant / Dining Enquiry");
    }
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="restaurant" className="restaurant-section">
      <div className="restaurant-container">
        <div className="restaurant-layout">
          {/* Left Column: Details & Highlights */}
          <div className="restaurant-info-col">
            <span className="section-tag">OUR RESTAURANT</span>
            <h2 className="section-title">Good Food. Great Taste.</h2>
            <div className="gold-flourish left-aligned">
              <span className="gold-flourish-icon">✦</span>
            </div>

            <p className="restaurant-intro">
              Freshly prepared food with quality ingredients and traditional
              recipes.
            </p>

            <ul className="restaurant-checklist">
              {restaurantHighlights.map((item, index) => (
                <li key={index} className="checklist-item">
                  <span className="check-icon-circle">
                    <CheckIcon size={14} />
                  </span>
                  <span className="check-item-text">{item}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={handleEnquire}
              className="restaurant-enquire-btn"
            >
              ENQUIRE NOW
            </button>
          </div>

          {/* Right Column: 4 Culinary Dishes */}
          <div className="restaurant-food-grid">
            {foodItems.map((dish) => (
              <div key={dish.id} className="food-item-card">
                <div className="food-img-wrapper">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="food-img"
                    loading="lazy"
                  />
                </div>
                <h4 className="food-name">{dish.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
