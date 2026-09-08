import React, { useState } from "react";
import "./Booking.css";

interface BookingProps {
  initialSubject?: string;
}

export const Booking: React.FC<BookingProps> = ({ initialSubject = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    message: initialSubject ? `Enquiry regarding: ${initialSubject}` : "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate enquiry submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "1",
        message: "",
      });
    }, 600);
  };

  return (
    <div id="contact" className="booking-card-widget">
      <div className="booking-card-header">
        <span className="section-tag">BOOK / ENQUIRE</span>
        <h3 className="booking-title">We will contact you shortly</h3>
      </div>

      {submitted ? (
        <div className="booking-success-box">
          <div className="success-icon-badge">✓</div>
          <h4>Thank You for Your Enquiry!</h4>
          <p>
            Our team at Kempty View Hotel will contact you shortly to confirm
            availability and details.
          </p>
          <button
            type="button"
            className="btn-gold reset-btn"
            onClick={() => setSubmitted(false)}
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-row-2">
            <div className="form-field-group">
              <label htmlFor="name" className="field-label">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-field-group">
              <label htmlFor="phone" className="field-label">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Phone Number"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row-3">
            <div className="form-field-group">
              <label htmlFor="checkIn" className="field-label">
                Check-in Date
              </label>
              <input
                id="checkIn"
                name="checkIn"
                type="date"
                className="form-input"
                value={formData.checkIn}
                onChange={handleChange}
              />
            </div>

            <div className="form-field-group">
              <label htmlFor="checkOut" className="field-label">
                Check-out Date
              </label>
              <input
                id="checkOut"
                name="checkOut"
                type="date"
                className="form-input"
                value={formData.checkOut}
                onChange={handleChange}
              />
            </div>

            <div className="form-field-group">
              <label htmlFor="guests" className="field-label">
                No. of Guests
              </label>
              <select
                id="guests"
                name="guests"
                className="form-select"
                value={formData.guests}
                onChange={handleChange}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5+">5+ Guests</option>
                <option value="Group">Group / Event</option>
              </select>
            </div>
          </div>

          <div className="form-field-group">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Your message or special requirements..."
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="booking-submit-btn"
          >
            {isSubmitting ? "SENDING..." : "SEND ENQUIRY"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Booking;
