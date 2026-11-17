import React from 'react';
import './Reception.css';
import bellLeftImg from '../../assets/images/bell-left.webp';
import bellRightImg from '../../assets/images/bell-right.webp';
import receptionImg from '../../assets/images/reception.png';
import receptionTitleImg from '../../assets/images/the-beginning-of-always.webp';
import rectangleImg from '../../assets/images/Rectangle.webp';
import { weddingData } from '../../data/weddingData';
import { GiClick } from 'react-icons/gi';

export default function Reception({ data }) {
  const event = data || weddingData.reception;

  return (
    <section 
      className="wedding-reception"
      aria-label="Wedding Reception Event"
    >
      <div className="reception-overlay" aria-hidden="true"></div>

      {/* Hanging Brass Bells in Corners */}
      <img 
        src={bellLeftImg} 
        alt="Decorative hanging brass bells" 
        className="reception-bell-left"
        width="90"
        height="135"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      <img 
        src={bellRightImg} 
        alt="Decorative hanging brass bells" 
        className="reception-bell-right"
        width="89"
        height="135"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />

      <div className="reception-content scroll-reveal">
        {/* Intro Tagline */}
        <p className="reception-tagline">
          A celebration of love, tradition, and the coming<br />
          together of two families
        </p>

        {/* Event Title */}
        <div className="reception-title-wrap">
          <img 
            src={receptionTitleImg} 
            alt={event?.title || "The Beginning of Always"} 
            className="reception-title-img"
            width="1324"
            height="216"
          />
        </div>

        {/* Event Subtitle */}
        <p className="reception-subtitle">
          {event?.subtitle || "(Wedding Reception)"}
        </p>

        {/* Date & Time */}
        <div className="reception-schedule">
          <p className="schedule-date">{event?.date || "Date: Thursday, 7th January 2027"}</p>
          <p className="schedule-time">{event?.time || "Time: 7:00 PM onwards"}</p>
        </div>

        {/* Venue Button */}
        <div className="reception-venue-wrapper">
          <a 
            href={event?.mapUrl || "https://maps.google.com/?q=Klay-hills+Calicut"}
            target="_blank"
            rel="noopener noreferrer"
            className="reception-venue-box"
            aria-label="View Venue on Google Maps"
          >
            <span className="reception-venue-text">
              {event?.venue || "Venue: Klay-hills, Calicut"}
            </span>
            <GiClick className="reception-venue-click-icon" aria-hidden="true" />
          </a>
        </div>

        {/* Balcony & Veena Illustration */}
        <div className="reception-illustration-wrapper">
          <img 
            src={receptionImg} 
            alt="Woman playing veena on heritage balcony with floral garlands illustration" 
            className="reception-illustration-img"
            width="314"
            height="472"
            loading="lazy"
        decoding="async"
          />
          <div className="reception-crafted-by-wrap">
            <img 
              src={rectangleImg} 
              alt="Conceptualised & crafted by Urban Knots" 
              className="reception-crafted-by-img"
              width="76"
              height="24"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

