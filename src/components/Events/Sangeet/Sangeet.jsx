import React from 'react';
import './Sangeet.css';

export default function Sangeet({ event }) {
  return (
    <article className="event-card sangeet-card scroll-reveal">
      <div className="event-badge">02 • MUSICAL EVENING</div>
      <h3 className="event-title">{event.title}</h3>
      <p className="event-subtitle">{event.subtitle}</p>

      <div className="sangeet-royal-motif">
        <span className="motif-icon">🎺 🎷 🪕</span>
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

