import React from "react";
import { BedIcon, FanIcon, TVIcon, GeyserIcon, WaterIcon } from "../common/Icons";
import { hotelRooms } from "../../data/hotelData";
import "./Rooms.css";

const amenityIconMap: Record<string, React.ReactNode> = {
  bed: <BedIcon size={16} />,
  fan: <FanIcon size={16} />,
  tv: <TVIcon size={16} />,
  geyser: <GeyserIcon size={16} />,
  water: <WaterIcon size={16} />,
};

interface RoomsProps {
  onSelectRoom?: (roomName: string) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onSelectRoom }) => {
  const handleEnquire = (roomTitle: string) => {
    if (onSelectRoom) {
      onSelectRoom(roomTitle);
    }
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="rooms" className="rooms-section">
      <div className="rooms-container">
        <div className="section-header-center">
          <span className="section-tag">OUR ROOMS</span>
          <h2 className="section-title">Comfort &amp; Convenience</h2>
          <div className="gold-flourish">
            <span className="gold-flourish-icon">✦</span>
          </div>
        </div>

        <div className="rooms-grid">
          {hotelRooms.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-image-wrap">
                <img
                  src={room.image}
                  alt={room.title}
                  className="room-card-img"
                  loading="lazy"
                />
              </div>

              <div className="room-card-body">
                <h3 className="room-title">{room.title}</h3>

                {room.description ? (
                  <p className="room-custom-desc">{room.description}</p>
                ) : (
                  <div className="room-amenities-row">
                    {room.amenities.map((item, i) => (
                      <span key={i} className="amenity-pill">
                        <span className="amenity-icon">
                          {amenityIconMap[item.icon] || item.icon}
                        </span>
                        <span className="amenity-name">{item.name}</span>
                      </span>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => handleEnquire(room.title)}
                  className="room-enquire-btn"
                >
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
