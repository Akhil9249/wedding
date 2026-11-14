import React from 'react';
import './Venue.css';
import bgImg from '../../assets/images/bg.png';
import ornamentImg from '../../assets/images/ornament.png';
import naadanVirunnuImg from '../../assets/images/naadan-virunnu.png';
import kerala01Img from '../../assets/images/kerala01.png';
import { weddingData } from '../../data/weddingData';

export default function Venue({ data, venue }) {
  const event = data || venue || weddingData.mangalaDarshanam;

  return (
    <section 
      className="wedding-darshanam"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="darshanam-overlay" aria-hidden="true"></div>

      <div className="darshanam-content scroll-reveal">
        {/* Top Decorative Ornament */}
        <div className="darshanam-ornament-wrap">
          <img
            src={ornamentImg}
            alt=""
            className="darshanam-ornament-img"
            width="82"
            height="35"
            aria-hidden="true"
          />
        </div>

        {/* Intro Tagline */}
        <p className="darshanam-tagline">
          {event?.tagline || "As two families come together, let us celebrate the richness of our traditions, the warmth of togetherness and the timeless flavours of Kerala"}
        </p>

        {/* Event Title */}
        <h2 className="darshanam-title">
          <img
            src={naadanVirunnuImg}
            alt={event?.title || "Naadan Virunnu"}
            className="darshanam-title-img"
            width="235"
            height="49"
            loading="eager"
          />
        </h2>

        {/* Event Subtitle */}
        <p className="darshanam-subtitle">{event?.subtitle || "(A Festive Feast)"}</p>

        {/* Date & Time */}
        <div className="darshanam-schedule">
          <p className="schedule-date">{event?.date || "Date: Tuesday, 5th January 2027"}</p>
          <p className="schedule-time">{event?.time || "Time: 12:00 PM"}</p>
        </div>

        {/* Venue Button */}
        <div className="darshanam-venue-wrapper">
          <a 
            href={event?.mapUrl || "https://maps.google.com/?q=Ashirvadh+Nature+Resort+Wayanad"}
            target="_blank"
            rel="noopener noreferrer"
            className="darshanam-venue-box"
            aria-label="View Venue on Google Maps"
          >
            <span className="darshanam-venue-text">
              {event?.venue || "Venue: Auditorium, Ashirvadh Nature Resort, Wayanad"}
            </span>
          </a>
        </div>

        {/* Kerala Festive Procession & Elephant Illustration */}
        <div className="darshanam-illustration-wrapper">
          <img 
            src={kerala01Img} 
            alt="Naadan Virunnu Kerala festive procession illustration" 
            className="darshanam-illustration-img"
            width="402"
            height="548"
            loading="eager"
          />
        </div>

        {/* Bottom Decorative Ornament */}
        <div className="darshanam-bottom-ornament-wrap">
          <img
            src={ornamentImg}
            alt=""
            className="darshanam-bottom-ornament-img"
            width="82"
            height="35"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
