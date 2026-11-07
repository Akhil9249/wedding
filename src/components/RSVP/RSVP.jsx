import React, { useState } from 'react';
import './RSVP.css';

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attendance: 'attending',
    wishes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="wedding-rsvp scroll-reveal">
      <div className="rsvp-card">
        <span className="rsvp-label">JOIN OUR CELEBRATION</span>
        <h3 className="rsvp-title">Kindly Respond</h3>
        <p className="rsvp-subtitle">Please confirm your presence by December 15, 2026</p>

        {submitted ? (
          <div className="rsvp-thankyou">
            <h4>Thank You!</h4>
            <p>Your RSVP and warm wishes have been received with love.</p>
          </div>
        ) : (
          <form className="rsvp-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <select id="guests" name="guests" value={formData.guests} onChange={handleChange}>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4+ Family</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="attendance">Will You Attend?</label>
                <select id="attendance" name="attendance" value={formData.attendance} onChange={handleChange}>
                  <option value="attending">Joyfully Accept</option>
                  <option value="declining">Regretfully Decline</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="wishes">Blessings & Wishes</label>
              <textarea
                id="wishes"
                name="wishes"
                rows="3"
                placeholder="Share your warm wishes for the couple..."
                value={formData.wishes}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="rsvp-submit-btn">
              Send RSVP
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

