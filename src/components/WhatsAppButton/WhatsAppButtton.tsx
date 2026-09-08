import React from "react";
import { WhatsAppIcon } from "../common/Icons";
import { contactDetails } from "../../data/hotelData";
import "./WhatAppButton.css";

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(
    "Hello Kempty View Hotel! I would like to inquire about room booking and dining."
  )}`;

  return (
    <aside aria-label="WhatsApp Quick Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating-btn"
        title="Chat with us on WhatsApp"
      >
        <WhatsAppIcon size={32} />
        <span className="whatsapp-pulse-ring"></span>
      </a>
    </aside>
  );
};

export default WhatsAppButton;
