import React from "react";
import Logo from "../Logo/Logo";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "../common/Icons";
import { contactDetails } from "../../data/hotelData";
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Left: Hotel Logo */}
        <div className="footer-brand-col">
          <Logo variant="light" size="sm" />
        </div>

        {/* Middle Info Columns */}
        <div className="footer-info-group">
          <a
            href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
            className="footer-info-item"
          >
            <span className="footer-icon-gold">
              <PhoneIcon size={16} />
            </span>
            <span className="footer-info-text">{contactDetails.phone}</span>
          </a>

          <a
            href={`mailto:${contactDetails.email}`}
            className="footer-info-item"
          >
            <span className="footer-icon-gold">
              <MailIcon size={16} />
            </span>
            <span className="footer-info-text">{contactDetails.email}</span>
          </a>

          <div className="footer-info-item">
            <span className="footer-icon-gold">
              <MapPinIcon size={16} />
            </span>
            <span className="footer-info-text">{contactDetails.address}</span>
          </div>
        </div>

        {/* Right: Social Media Icons */}
        <div className="footer-social-col">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            aria-label="Visit Facebook page"
          >
            <FacebookIcon size={16} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            aria-label="Visit Instagram page"
          >
            <InstagramIcon size={16} />
          </a>
          <a
            href={`https://wa.me/${contactDetails.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
