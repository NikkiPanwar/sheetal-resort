import React from "react";
import "./Logo.css";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({ variant = "light", size = "md" }) => {
  return (
    <div className={`hotel-brand-logo logo-${variant} logo-${size}`}>
      <div className="logo-emblem">
        <svg
          viewBox="0 0 100 42"
          className="logo-mountain-svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left/Central Mountain Peak */}
          <path
            d="M50 4L78 38H22L50 4Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Inner Mountain Ridgeline */}
          <path
            d="M50 4V38M50 18L64 38M50 26L36 38"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Smaller Left Peak */}
          <path
            d="M26 18L10 38H42"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Smaller Right Peak */}
          <path
            d="M74 18L90 38H58"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>

        {/* 5 Golden Stars */}
        <div className="logo-stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="star-icon">
              ★
            </span>
          ))}
        </div>
      </div>

      <div className="logo-text-group">
        <span className="brand-name">KEMPTY VIEW</span>
        <span className="brand-sub">HOTEL &amp; RESTAURANT</span>
      </div>
    </div>
  );
};

export default Logo;
