import React, { useState } from "react";
import { galleryItems } from "../../data/hotelData";
import "./Gallery.css";

export const Gallery: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % galleryItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        (activeImageIndex - 1 + galleryItems.length) % galleryItems.length
      );
    }
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <span className="section-tag">GALLERY</span>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
            >
              <div className="gallery-thumb-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-thumb"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="gallery-zoom-icon">🔍</span>
                </div>
              </div>
              <span className="gallery-card-title">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close image preview"
          >
            ✕
          </button>

          <button
            className="lightbox-nav-btn prev"
            onClick={prevImage}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[activeImageIndex].image}
              alt={galleryItems[activeImageIndex].title}
              className="lightbox-img"
            />
            <div className="lightbox-caption">
              {galleryItems[activeImageIndex].title}
            </div>
          </div>

          <button
            className="lightbox-nav-btn next"
            onClick={nextImage}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
