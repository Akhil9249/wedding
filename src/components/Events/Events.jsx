import React from 'react';
import './Events.css';
import bgImg from '../../assets/images/bg.png';
import poolsideImg from '../../assets/images/poolside.png';
import ornamentImg from '../../assets/images/ornament.png';

export default function Events() {
  return (
    <section 
      className="wedding-event-pool scroll-reveal"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="event-overlay" aria-hidden="true"></div>

      <div className="event-content">
        {/* Top Decorative Ornament */}
        <div className="pool-ornament-wrap">
          <img 
            src={ornamentImg} 
            alt="" 
            className="pool-ornament-img"
            width="82"
            height="35"
            aria-hidden="true" 
          />
        </div>

        {/* Intro Quote */}
        <p className="pool-tagline">
          A little sunshine and a whole lot of poolside fun!
        </p>

        {/* Event Title */}
        <h2 className="pool-title">Summer Daydream</h2>

         <p className="pool-subtitle">(Pool party)</p>

        {/* Date & Time */}
        <div className="pool-schedule">
          <p className="schedule-date">Date: Monday, 4th January 2027</p>
          <p className="schedule-time">Time: 10:00 AM</p>
        </div>

        {/* Venue Button */}
        <div className="pool-venue-wrapper">
          <a 
            href="https://maps.google.com/?q=Ashirvadh+Nature+Resort+Wayanad"
            target="_blank"
            rel="noopener noreferrer"
            className="pool-venue-box"
            aria-label="View Venue on Google Maps"
          >
            <span className="pool-venue-text">
              Venue: Poolside, Ashirvadh Nature Resort, Wayanad
            </span>
          </a>
        </div>

        {/* Poolside & Fountain Illustration */}
        <div className="pool-illustration-wrapper">
          <img 
            src={poolsideImg} 
            alt="Summer Daydream poolside and fountain illustration" 
            className="pool-illustration-img"
            width="576"
            height="531"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );       

}
