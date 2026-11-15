import React from 'react';
import './Couple.css';
import coupleIllustrationImg from '../../assets/images/couple/couple-illustration.png';
import ornamentImg from '../../assets/images/ornament.png';
import thirukalyanamImg from '../../assets/images/couple/Thirukalyanam.svg';
import perchedParrotImg from '../../assets/images/perched-parrot.webp';
import flyingParrotImg from '../../assets/images/flying-parrot.webp';
import { GiClick } from 'react-icons/gi';

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
            <GiClick className="venue-click-icon" aria-hidden="true" />
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
