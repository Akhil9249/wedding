import React from 'react';
import './Couple.css';
import coupleIllustrationImg from '../../assets/images/couple/couple-illustration.png';
import ornamentImg from '../../assets/images/ornament.png';
import thirukalyanamImg from '../../assets/images/couple/Thirukalyanam.svg';
import perchedParrotImg from '../../assets/images/perched-parrot.webp';
import flyingParrotImg from '../../assets/images/flying-parrot.webp';

export default function Couple({ couple }) {
  return (
    <section 
      className="wedding-couple"
    >
      <div className="couple-overlay" aria-hidden="true"></div>
      
      <div className="couple-content">
        {/* Top Decorative Ornament */}
        <div className="thirukalyanam-ornament-wrap scroll-reveal">
          <img 
            src={ornamentImg} 
            alt="" 
            className="thirukalyanam-ornament-img" 
            width="82"
            height="35"
            aria-hidden="true" 
          />
        </div>

        {/* Invocation */}
        <p className="divine-blessing scroll-reveal">
          In the divine presence of Lord Guruvayurapan, two<br />
          hearts unite in a sacred bond at their
        </p>

        {/* Ceremony Titles */}
        <h2 className="thirukalyanam-title scroll-reveal">
          <img 
            src={thirukalyanamImg} 
            alt="Thirukalyanam" 
            className="thirukalyanam-title-img"
            width="193"
            height="44"
          />
        </h2>
        <p className="thirukalyanam-subtitle scroll-reveal">(Guruvayur Thalikettu)</p>

        {/* Date & Muhurtham */}
        <div className="ceremony-schedule scroll-reveal">
          <p className="schedule-date">Date: Thursday, 31st December 2026</p>
          <p className="schedule-muhurtham">Muhurtham: 9:00 AM</p>
        </div>

        {/* Venue Pill Button */}
        <div className="venue-wrapper scroll-reveal">
          <a 
            href="https://maps.google.com/?q=Guruvayur+Sree+Krishna+Temple"
            target="_blank"
            rel="noopener noreferrer"
            className="venue-box"
            aria-label="View Venue on Google Maps"
          >
            <span className="venue-text">Venue: Guruvayur Sree Krishna Temple, Guruvayur</span>
            <svg 
              className="venue-click-icon" 
              viewBox="15 0 226 240" 
              width="15" 
              height="16" 
              fill="#000000" 
              aria-hidden="true"
            >
              {/* Outer Concentric Ripple Ring */}
              <path 
                className="venue-ripple-outer" 
                d="M 79.88,113.87 A 56,56 0 1,1 144.12,113.87 L 137.24,104.04 A 44,44 0 1,0 86.76,104.04 Z" 
              />
              {/* Inner Concentric Ripple Ring */}
              <path 
                className="venue-ripple-inner" 
                d="M 95.00,97.44 A 34,34 0 1,1 129.00,97.44 L 123.00,87.05 A 22,22 0 1,0 101.00,87.05 Z" 
              />
              {/* Solid Tap Hand Body */}
              <path 
                className="venue-hand-body"
                d="M207.23,120c-8.61.4-15.23,7.82-15.23,16.43v7.28a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V120.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,144,120v15.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V64.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,96,64V183.74a8.19,8.19,0,0,1-6.72,8.16l-.12,0a6.09,6.09,0,0,1-6-3.09l-21-36.44c-4.3-7.46-13.74-10.57-21.4-6.62A16,16,0,0,0,34.15,168L65.1,228.05A8,8,0,0,0,72,232H208a8,8,0,0,0,7.16-4.42c.36-.72,8.84-15.06,8.84-40.65V136A16,16,0,0,0,207.23,120Z" 
              />
            </svg>
          </a>
        </div>

        {/* Couple Traditional Illustration */}
        <div className="illustration-wrapper scroll-reveal">
          {/* Animated Pillar Parrot */}
          <div className="couple-parrot-container" aria-hidden="true">
            <div className="couple-parrot-flight-path">
              <div className="couple-parrot-bob">
                <img
                  src={perchedParrotImg}
                  alt=""
                  className="couple-parrot-perched-img"
                  width="349"
                  height="351"
                  loading="eager"
                />
                <img
                  src={flyingParrotImg}
                  alt=""
                  className="couple-parrot-flying-img"
                  width="349"
                  height="351"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          <img
            src={coupleIllustrationImg}
            alt="Thirukalyanam couple traditional attire illustration"
            className="couple-illustration"
            width="402"
            height="511"
            loading="eager"
          />
        </div>

        {/* Bottom Decorative Ornament */}
        <div className="couple-bottom-ornament-wrap scroll-reveal">
          <img 
            src={ornamentImg} 
            alt="" 
            className="thirukalyanam-ornament-img" 
            aria-hidden="true" 
          />
        </div>

        {/* Optional Couple Card for details if provided */}
        {/* {couple && (couple.bride || couple.groom) && (
          <div className="couple-names-wrap">
            {couple.bride && (
              <div className="couple-person">
                <h3 className="person-name">{couple.bride.fullName || couple.bride.firstName}</h3>
                {couple.bride.parents && <p className="person-parents">{couple.bride.parents}</p>}
              </div>
            )}
            {couple.groom && (
              <div className="couple-person">
                <h3 className="person-name">{couple.groom.fullName || couple.groom.firstName}</h3>
                {couple.groom.parents && <p className="person-parents">{couple.groom.parents}</p>}
              </div>
            )}
          </div>
        )} */}
      </div>
    </section>
  );
}
