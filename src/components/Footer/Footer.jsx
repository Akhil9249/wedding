import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="reception-footer app-footer" style={{ backgroundColor: '#2C190A' }}>
      <span className="footer-brand">
        <span className="brand-bold">Urban</span> <span className="brand-light">Knots</span>
      </span>
      <a 
        href="https://www.urbanknotsllp.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="footer-link footer-link-website"
        aria-label="Visit Urban Knots website"
      >
        <svg className="footer-icon globe-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span>www.urbanknotsllp.com</span>
      </a>
      <a 
        href="tel:+918129195151" 
        className="footer-link footer-link-phone"
        aria-label="Call Urban Knots"
      >
        <svg className="footer-icon phone-icon" viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A17.93 17.93 0 0 1 2 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.68 1 1 0 0 1-.24 1.02l-2.23 2.09z"/>
        </svg>
        <span>+91 812 919 5151</span>
      </a>
    </footer>
  );
}
