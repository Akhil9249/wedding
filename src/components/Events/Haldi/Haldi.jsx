import React from 'react';
import './Haldi.css';

export default function Haldi({ event }) {
  const haldiImg = '';
  const courtyardWater = '';
  return (
    <article className="event-card haldi-card scroll-reveal">
      <div className="event-badge">01 • CEREMONY</div>
      <h3 className="event-title">{event.title}</h3>
      <p className="event-subtitle">{event.subtitle}</p>

      <div className="event-illustration-container">
        <img
          src={courtyardWater || haldiImg}
          alt="Haldi Courtyard and Floral Pool"
          className="event-image"
        />
      </div>

      <div className="event-meta">
        <p className="event-date-time">{event.date} • {event.time}</p>
        <p className="event-venue">📍 {event.venue}</p>
        <p className="event-desc">{event.description}</p>
        <span className="event-tag">{event.tag}</span>
      </div>
    </article>
  );
}

