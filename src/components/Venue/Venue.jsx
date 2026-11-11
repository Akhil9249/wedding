import React from 'react';
import './Venue.css';
import bgImg from '../../assets/images/bg.png';
import darshanamImg from '../../assets/images/darshanam.png';
import { weddingData } from '../../data/weddingData';

export default function Venue({ data, venue }) {
  const event = data || venue || weddingData.mangalaDarshanam;

  return (
    <section 
      className="wedding-darshanam scroll-reveal"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="darshanam-overlay" aria-hidden="true"></div>

      <div className="darshanam-content">
        {/* Intro Tagline */}
        <p className="darshanam-tagline">
          A morning of prayers, blessings and gratitude as<br />
          we seek divine blessings for our new beginning
        </p>

        {/* Event Title */}
        <h2 className="darshanam-title">{event?.title || "Mangala Darshanam"}</h2>

        {/* Event Subtitle */}
        <p className="darshanam-subtitle">{event?.subtitle || "(Temple darshan and blessings)"}</p>

        {/* Date & Time */}
        <div className="darshanam-schedule">
          <p className="schedule-date">{event?.date || "Date: Tuesday, 5th January 2027"}</p>
          <p className="schedule-time">{event?.time || "Time: 7:00am"}</p>
        </div>

        {/* Venue Button */}
        <div className="darshanam-venue-wrapper">
          <a 
            href={event?.mapUrl || "https://maps.google.com/?q=Guruvayur+Sree+Krishna+Temple"}
            target="_blank"
            rel="noopener noreferrer"
            className="darshanam-venue-box"
            aria-label="View Venue on Google Maps"
          >
            <span className="darshanam-venue-text">
              {event?.venue || "Venue: Lorem......................................"}
            </span>
          </a>
        </div>

        {/* Temple Procession & Elephant Illustration */}
        <div className="darshanam-illustration-wrapper">
          <img 
            src={darshanamImg} 
            alt="Mangala Darshanam temple procession illustration" 
            className="darshanam-illustration-img"
            width="402"
            height="352"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
