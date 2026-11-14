import React from 'react';
import './Reception.css';
import bgImg from '../../assets/images/bg.png';
import bellLeftImg from '../../assets/images/bell-left.png';
import bellRightImg from '../../assets/images/bell-right.png';
import receptionImg from '../../assets/images/reception.png';
import { weddingData } from '../../data/weddingData';

export default function Reception({ data }) {
  const event = data || weddingData.reception;

  return (
    <section 
      className="wedding-reception"
      style={{ backgroundImage: `url(${bgImg})` }}
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
        loading="eager"
        aria-hidden="true"
      />
      <img 
        src={bellRightImg} 
        alt="Decorative hanging brass bells" 
        className="reception-bell-right"
        width="89"
        height="135"
        loading="eager"
        aria-hidden="true"
      />

      <div className="reception-content scroll-reveal">
        {/* Intro Tagline */}
        <p className="reception-tagline">
          A celebration of love, tradition, and the coming<br />
          together of two families
        </p>

        {/* Event Title */}
        <h2 className="reception-title">
          {event?.title || "The Beginning of Always"}
        </h2>

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
            loading="eager"
          />
        </div>

        {/* Bottom Credits Footer Bar */}
        <footer className="reception-footer">
          <span className="footer-brand">Urban Knots</span>
          <a 
            href="https://www.urbanknotsllp.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
            aria-label="Visit Urban Knots website"
          >
            <svg className="footer-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>www.urbanknotsllp.com</span>
          </a>
          <a 
            href="tel:+918129195151" 
            className="footer-link"
            aria-label="Call Urban Knots"
          >
            <svg className="footer-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>+91 812 919 5151</span>
          </a>
        </footer>
      </div>
    </section>
  );
}

