import React from 'react';
import './Countdown.css';
import bgImg from '../../assets/images/bg.png';
import ornamentImg from '../../assets/images/ornament.png';
import sangeetImg from '../../assets/images/sangeet.png';
import { weddingData } from '../../data/weddingData';

export default function Countdown({ data }) {
  const event = data || weddingData.sangeet;

  return (
    <section 
      className="wedding-sangeet scroll-reveal"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="sangeet-overlay" aria-hidden="true"></div>

      <div className="sangeet-content">
        {/* Top Decorative Ornament */}
        <div className="sangeet-ornament-wrap">
          <img
            src={ornamentImg}
            alt=""
            className="sangeet-ornament-img"
            width="82"
            height="35"
            aria-hidden="true"
          />
        </div>

        {/* Intro Tagline */}
        <p className="sangeet-tagline">
          {event?.tagline || "Come ready to dance, celebrate, and keep the party going all night long!"}
        </p>

        {/* Event Title */}
        <h2 className="sangeet-title">{event?.title || "Shaam e Sangeet"}</h2>

        {/* Event Subtitle */}
        <p className="sangeet-subtitle">{event?.subtitle || "(Sangeet)"}</p>

        {/* Date & Time */}
        <div className="sangeet-schedule">
          <p className="schedule-date">{event?.date || "Date: Monday, 4th January 2027"}</p>
          <p className="schedule-time">{event?.time || "Time: 7:00 PM"}</p>
        </div>

        {/* Venue Button */}
        <div className="sangeet-venue-wrapper">
          <a 
            href={event?.mapUrl || "https://maps.google.com/?q=Ashirvadh+Nature+Resort+Wayanad"}
            target="_blank"
            rel="noopener noreferrer"
            className="sangeet-venue-box"
            aria-label="View Venue on Google Maps"
          >
            <span className="sangeet-venue-text">
              {event?.venue || "Venue: Open stage, Ashirvadh Nature Resort, Wayanad"}
            </span>
          </a>
        </div>

        {/* Decor & Gramophone Illustration */}
        <div className="sangeet-illustration-wrapper">
          <img 
            src={sangeetImg} 
            alt="Shaam e Sangeet traditional decor illustration" 
            className="sangeet-illustration-img"
            width="402"
            height="558"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
