import React from "react";
import BookingComponent from "../../components/Booking/Booking";
import "../Rooms/Room.css";

export const ContactPage: React.FC = () => {
  return (
    <div className="subpage-wrapper">
      <div className="subpage-banner">
        <h1>Contact &amp; Bookings</h1>
        <p>Send an enquiry or contact us directly</p>
      </div>
      <div style={{ maxWidth: 700, margin: "40px auto", padding: "0 20px" }}>
        <BookingComponent />
      </div>
    </div>
  );
};

export default ContactPage;
