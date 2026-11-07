import React from 'react';
import './Reception.css';

export default function Reception({ event }) {
  return (
    <article className="event-card reception-card scroll-reveal">
      <div className="event-badge">05 • GRAND CELEBRATION</div>
      <h3 className="event-title">{event.title}</h3>
      <p className="event-subtitle">{event.subtitle}</p>

      <div className="reception-motif">
        <span className="reception-icon">🥂 ✨ 🍽️</span>
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

