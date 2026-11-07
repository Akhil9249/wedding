import React from 'react';
import './Baraat.css';

export default function Baraat({ event }) {
  return (
    <article className="event-card baraat-card scroll-reveal">
      <div className="event-badge">03 • PROCESSION</div>
      <h3 className="event-title">{event.title}</h3>
      <p className="event-subtitle">{event.subtitle}</p>

      <div className="elephant-procession-motif">
        <div className="nettipattam-badge">🐘 🥁 📯</div>
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

