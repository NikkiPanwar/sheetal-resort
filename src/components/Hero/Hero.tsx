import React from "react";
import Features from "../Features/Features";
import "./Hero.css";

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-master-section">
      <div className="hero-banner">
        <div className="hero-overlay"></div>

        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-headline">
              Stay. Dine. Celebrate.
            </h1>

            <div className="hero-script-subtitle">
              Near Kempty Falls
            </div>

            <p className="hero-description">
              Comfortable rooms, delicious food and warm hospitality with a
              beautiful mountain view.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                onClick={() => scrollTo("rooms")}
                className="hero-btn-primary"
              >
                BOOK A ROOM
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="hero-btn-outline"
              >
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scenario cards integrated directly below stay/dine content */}
      <Features />
    </section>
  );
};

export default Hero;