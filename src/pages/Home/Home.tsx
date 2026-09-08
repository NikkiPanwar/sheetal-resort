import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Rooms from "../../components/Rooms/Rooms";
import Restaurant from "../../components/Restaurant/Restaurant";
import Gallery from "../../components/Gallery/Gallery";
import Location from "../../components/Location/Location";
import Booking from "../../components/Booking/Booking";
import "./Home.css";

export const Home: React.FC = () => {
  const [selectedEnquirySubject, setSelectedEnquirySubject] = useState<string>("");

  const handleSelectRoom = (roomName: string) => {
    setSelectedEnquirySubject(roomName);
  };

  const handleEnquireFood = (topic: string) => {
    setSelectedEnquirySubject(topic);
  };

  return (
    <div className="home-page">
      {/* 1. Stay & Dine Hero Banner + Integrated Scenario Cards Below */}
      <Hero />

      {/* 2. Rooms Component */}
      <Rooms onSelectRoom={handleSelectRoom} />

      {/* 3. Food / Restaurant Component */}
      <Restaurant onEnquire={handleEnquireFood} />

      {/* 4. Celebrate Section SKIPPED as requested ("skip this celebrate one") */}

      {/* 5. Gallery Component */}
      <Gallery />

      {/* 6. Location & Booking/Contact Form separate components used as children in this DOM */}
      <section className="location-booking-section">
        <div className="location-booking-container">
          <div className="location-booking-grid">
            <Location />
            <Booking initialSubject={selectedEnquirySubject} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
