import React from "react";
import {
  MountainIcon,
  BedIcon,
  FoodClocheIcon,
  GroupIcon,
  ChefHatIcon,
  HomeIcon,
} from "../common/Icons";
import { scenarioFeatures } from "../../data/hotelData";
import "./Features.css";

const iconMap: Record<string, React.ReactNode> = {
  mountain: <MountainIcon size={32} />,
  bed: <BedIcon size={32} />,
  food: <FoodClocheIcon size={32} />,
  dining: <GroupIcon size={32} />,
  catering: <ChefHatIcon size={32} />,
  home: <HomeIcon size={32} />,
};

export const Features: React.FC = () => {
  return (
    <div className="features-floating-wrapper">
      <div className="features-card-container">
        {scenarioFeatures.map((item, index) => (
          <div
            key={item.id}
            className="scenario-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="scenario-icon-box">
              {iconMap[item.iconType]}
            </div>
            <h3 className="scenario-title">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;