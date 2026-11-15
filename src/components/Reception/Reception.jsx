import React from 'react';
import './Reception.css';
import bellLeftImg from '../../assets/images/bell-left.png';
import bellRightImg from '../../assets/images/bell-right.png';
import receptionImg from '../../assets/images/reception.png';
import receptionTitleImg from '../../assets/images/the-beginning-of-always.png';
import rectangleImg from '../../assets/images/Rectangle.png';
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
            loading="eager"
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

        {/* Bottom Credits Footer Bar */}
        <footer className="reception-footer">
          <span className="footer-brand">
            <span className="brand-bold">Urban</span> <span className="brand-light">Knots</span>
          </span>
          <a 
            href="https://www.urbanknotsllp.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link footer-link-website"
            aria-label="Visit Urban Knots website"
          >
            <svg className="footer-icon globe-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>www.urbanknotsllp.com</span>
          </a>
          <a 
            href="tel:+918129195151" 
            className="footer-link footer-link-phone"
            aria-label="Call Urban Knots"
          >
            <svg className="footer-icon phone-icon" viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A17.93 17.93 0 0 1 2 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.68 1 1 0 0 1-.24 1.02l-2.23 2.09z"/>
            </svg>
            <span>+91 812 919 5151</span>
          </a>
        </footer>
      </div>
    </section>
  );
}

