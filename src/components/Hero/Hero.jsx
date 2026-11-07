import React from 'react';
import './Hero.css';

export default function Hero({ couple, dates }) {
  return (
    <section className="wedding-hero scroll-reveal">
      <div className="monogram">M & N</div>
      <h1 className="couple-title">
        <span className="bride-name">{couple.bride.firstName}</span>
        <span className="ampersand">&</span>
        <span className="groom-name">{couple.groom.firstName}</span>
      </h1>
      <p className="invitation-lead">{couple.tagline}</p>
      <div className="save-date-badge">
        <span className="badge-text">SAVE OUR DATES</span>
        <span className="badge-date">{dates.weddingDate}</span>
      </div>
    </section>
  );
}

