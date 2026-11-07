import React from 'react';
import './Venue.css';

export default function Venue({ venue }) {
  return (
    <section className="wedding-venue scroll-reveal">
      <div className="venue-card">
        <span className="venue-label">LOCATION & VENUE</span>
        <h3 className="venue-name">{venue.name}</h3>
        <p className="venue-location">{venue.location}</p>
        <a
          href={venue.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-button"
        >
          📍 View on Google Maps
        </a>
      </div>
    </section>
  );
}

