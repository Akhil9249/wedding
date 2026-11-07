import React from 'react';
import './Couple.css';
import leavesFlutter from '../../assets/images/leaves_flutter_v2.gif';
import coupleBg from '../../assets/images/couple-bg.jpg';
import ornamentImg from '../../assets/images/ornament.png';

export default function Couple({ couple }) {
  return (
    <section 
      className="wedding-couple scroll-reveal"
      style={{ backgroundImage: `url(${coupleBg})` }}
    >
      <div className="couple-overlay" aria-hidden="true"></div>
      
      <div className="couple-content">
        {/* Top Decorative Ornament */}
        <div className="thirukalyanam-ornament-wrap">
          <img 
            src={ornamentImg} 
            alt="" 
            className="thirukalyanam-ornament-img" 
            aria-hidden="true" 
          />
        </div>

        {/* Invocation */}
        <p className="divine-blessing">
          In the divine presence of Lord Guruvayurapan, two<br />
          hearts unite in a sacred bond at their
        </p>

        {/* Ceremony Titles */}
        <h2 className="thirukalyanam-title">Thirukalyanam</h2>
        <p className="thirukalyanam-subtitle">(Guruvayur Thalikettu)</p>

        {/* Date & Muhurtham */}
        <div className="ceremony-schedule">
          <p className="schedule-date">Date: Thursday, 31st December 2026</p>
          <p className="schedule-muhurtham">Muhurtham: 9:00am</p>
        </div>

        {/* Venue Pill Button */}
        <div className="venue-wrapper">
          <a 
            href="https://maps.google.com/?q=Guruvayur+Sree+Krishna+Temple"
            target="_blank"
            rel="noopener noreferrer"
            className="venue-box"
            aria-label="View Venue on Google Maps"
          >
            <span className="venue-text">Venue: Guruvayur Sree Krishna Temple, Guruvayur</span>
          </a>
        </div>

        {/* Couple Traditional Illustration */}
        <div className="illustration-wrapper">
          <img
            src={leavesFlutter}
            alt="Thirukalyanam couple traditional attire illustration"
            className="couple-illustration"
          />
        </div>

        {/* Bottom Decorative Ornament */}
        <div className="couple-bottom-ornament-wrap">
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
