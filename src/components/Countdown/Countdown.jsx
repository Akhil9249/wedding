import React from 'react';
import './Countdown.css';
import { useCountdown } from '../../hooks/useCountdown';

export default function Countdown({ targetDateIso }) {
  const { days, hours, minutes, seconds, isEnded } = useCountdown(targetDateIso);

  return (
    <section className="wedding-countdown scroll-reveal">
      <h3 className="countdown-heading">Counting Down to the Big Day</h3>
      {isEnded ? (
        <p className="celebration-message">Today is the Day! Let the celebrations begin! 🎉</p>
      ) : (
        <div className="countdown-boxes">
          <div className="time-box">
            <span className="time-number">{days}</span>
            <span className="time-label">Days</span>
          </div>
          <span className="time-colon">:</span>
          <div className="time-box">
            <span className="time-number">{hours}</span>
            <span className="time-label">Hours</span>
          </div>
          <span className="time-colon">:</span>
          <div className="time-box">
            <span className="time-number">{minutes}</span>
            <span className="time-label">Minutes</span>
          </div>
          <span className="time-colon">:</span>
          <div className="time-box">
            <span className="time-number">{seconds}</span>
            <span className="time-label">Seconds</span>
          </div>
        </div>
      )}
    </section>
  );
}

