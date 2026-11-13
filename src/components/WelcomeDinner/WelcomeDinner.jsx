import React from 'react';
import './WelcomeDinner.css';
import bgImg from '../../assets/images/bg.png';
import welcomeDinnerImg from '../../assets/images/welcome-dinner.png';
import { weddingData } from '../../data/weddingData';

export default function WelcomeDinner({ data }) {
  const event = data || weddingData.welcomeDinner;

  const taglineLines = Array.isArray(event?.tagline)
    ? event.tagline
    : typeof event?.tagline === 'string'
      ? event.tagline.split('\n').map((s) => s.trim()).filter(Boolean)
      : [
          "An evening of good food, music and togetherness.",
          "Feel free to take the mic, sing a song and make the evening even more memorable!"
        ];

  return (
    <section
      className="wedding-welcome-dinner"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="welcome-dinner-overlay" aria-hidden="true"></div>

      <div className="welcome-dinner-content">
        {/* Intro Tagline */}
        <div className="welcome-dinner-tagline scroll-reveal">
          {taglineLines.map((line, index) => (
            <p key={index} className="tagline-line">{line}</p>
          ))}
        </div>

        {/* Event Title */}
        <h2 className="welcome-dinner-title scroll-reveal">
          {event?.title || "The First Toast"}
        </h2>

        {/* Event Subtitle */}
        <p className="welcome-dinner-subtitle scroll-reveal">
          {event?.subtitle || "(Welcome Dinner)"}
        </p>

        {/* Date & Time */}
        <div className="welcome-dinner-schedule scroll-reveal">
          <p className="schedule-date">
            {event?.date || "Date:  Sunday, 3rd January 2027"}
          </p>
          <p className="schedule-time">
            {event?.time || "Time: 7:00 PM"}
          </p>
        </div>

        {/* Venue Pill Button */}
        <div className="welcome-dinner-venue-wrapper scroll-reveal">
          <a
            href={event?.mapUrl || "https://maps.google.com/?q=Morickap+Lords+83+Wayanad"}
            target="_blank"
            rel="noopener noreferrer"
            className="welcome-dinner-venue-box"
            aria-label="View Venue on Google Maps"
          >
            <span className="welcome-dinner-venue-text">
              {event?.venue || "Venue: Lawn, Morickap Lords 83, Wayanad"}
            </span>
          </a>
        </div>

        {/* Evening Candlelit Dinner Illustration */}
        <div className="welcome-dinner-illustration-wrapper scroll-reveal">
          <img
            src={welcomeDinnerImg}
            alt="The First Toast welcome dinner lawn illustration"
            className="welcome-dinner-illustration-img"
            width="402"
            height="517"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

