import React from 'react';
import './Venue.css';
import ornamentImg from '../../assets/images/ornament.png';
import naadanVirunnuImg from '../../assets/images/naadan-virunnu.png';
import kerala01Img from '../../assets/images/kerala01.png';
import flyingParrotImg from '../../assets/images/flying-parrot-right.webp';
import { weddingData } from '../../data/weddingData';
import { GiClick } from 'react-icons/gi';

export default function Venue({ data, venue }) {
  const event = data || venue || weddingData.mangalaDarshanam;

  return (
    <section 
      className="wedding-darshanam"
      id="venue"
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
          {typeof event?.tagline === 'string' && event.tagline.includes('\n') ? (
            event.tagline.split('\n').map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))
          ) : (
            <>
              As two families come together, let us celebrate the<br />
              richness of our traditions, the warmth of togetherness<br />
              and the timeless flavours of Kerala
            </>
          )}
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
            <GiClick className="darshanam-venue-click-icon" aria-hidden="true" />
          </a>
        </div>

        {/* Kerala Festive Procession & Elephant Illustration */}
        <div className="darshanam-illustration-wrapper">
          {/* Animated Flying Parrot */}
          <div className="darshanam-parrot-container" aria-hidden="true">
            <div className="darshanam-parrot-flight-path">
              <div className="darshanam-parrot-bob">
                <img 
                  src={flyingParrotImg} 
                  alt="" 
                  className="darshanam-flying-parrot-img"
                  width="349"
                  height="351"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          <img 
            src={kerala01Img} 
            alt="Naadan Virunnu Kerala festive procession illustration" 
            className="darshanam-illustration-img"
            width="402"
            height="548"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
