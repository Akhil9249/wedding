import React from 'react';
import './Muhurtham.css';

export default function Muhurtham({ event }) {
  return (
    <article className="event-card muhurtham-card scroll-reveal">
      <div className="event-badge gold-highlight">04 • THE SACRED UNION</div>
      <h3 className="event-title">{event.title}</h3>
      <p className="event-subtitle">{event.subtitle}</p>

      <div className="mandap-motif">
        <span className="mandap-icon">🏛️ 🪷 🕯️</span>
      </div>

      <div className="event-meta">
        <p className="event-date-time highlight">{event.date} • {event.time}</p>
        <p className="event-venue">📍 {event.venue}</p>
        <p className="event-desc">{event.description}</p>
        <span className="event-tag gold-tag">{event.tag}</span>
      </div>
    </article>
  );
}

