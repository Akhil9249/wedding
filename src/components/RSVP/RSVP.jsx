import React from 'react';
import './RSVP.css';
import bgImg from '../../assets/images/bg.png';
import varmalaImg from '../../assets/images/varmala.png';
import ornamentImg from '../../assets/images/ornament.png';
import { weddingData } from '../../data/weddingData';

export default function RSVP({ data }) {
  const event = data || weddingData.varmala;

  return (
    <section 
      className="wedding-varmala"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="varmala-overlay" aria-hidden="true"></div>

      <div className="varmala-content scroll-reveal">
        {/* Intro Tagline */}
        <p className="varmala-tagline">
          {event?.tagline || "Witness an evening of sacred vows and promises for a lifetime"}
        </p>

        {/* Event Title */}
        <h2 className="varmala-title">{event?.title || "Varmala"}</h2>

        {/* Event Subtitle */}
        <p className="varmala-subtitle">{event?.subtitle || "(Wedding)"}</p>

        {/* Date & Time */}
        <div className="varmala-schedule">
          <p className="schedule-date">{event?.date || "Date: Tuesday, 5th January 2027"}</p>
          <p className="schedule-time">{event?.time || "Time: 3:30 PM"}</p>
        </div>

        {/* Venue Button */}
        <div className="varmala-venue-wrapper">
          <a 
            href={event?.mapUrl || "https://maps.google.com/?q=Ashirvadh+Nature+Resort+Wayanad"}
            target="_blank"
            rel="noopener noreferrer"
            className="varmala-venue-box"
            aria-label="View Venue on Google Maps"
          >
            <span className="varmala-venue-text">
              {event?.venue || "Venue: Amphitheatre, Ashirvadh Nature Resort, Wayanad"}
            </span>
          </a>
        </div>

        {/* Golden Mandap & Couple Illustration */}
        <div className="varmala-illustration-wrapper">
          <img 
            src={varmalaImg} 
            alt="Varmala wedding mandap and couple illustration" 
            className="varmala-illustration-img"
            width="402"
            height="457"
            loading="eager"
          />
        </div>

        {/* Bottom Decorative Ornament */}
        <div className="varmala-bottom-ornament-wrap">
          <img
            src={ornamentImg}
            alt=""
            className="varmala-bottom-ornament-img"
            width="82"
            height="35"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
