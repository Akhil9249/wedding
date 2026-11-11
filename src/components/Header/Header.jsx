import React from 'react';
import './Header.css';
import bgImg from '../../assets/images/bg.png';
import emblemImg from '../../assets/images/emblem.png';
import { weddingData } from '../../data/weddingData';

export default function Header({ data, couple }) {
  // Use passed data with fallback to weddingData
  const headerData = data || weddingData.header;
  const coupleData = couple || weddingData.couple;

  const emblemSrc = headerData?.placeholderImage || emblemImg;

  const brideFirstName = coupleData?.bride?.firstName || "Manisha";
  const brideParents = coupleData?.bride?.parents || "Daughter of Smt. Maya & Shri. Murali";
  const formattedBrideParents = brideParents.startsWith('(') ? brideParents : `(${brideParents})`;

  const groomFirstName = coupleData?.groom?.firstName || "Neel";
  const groomParents = coupleData?.groom?.parents || "Son of Smt. Sheena &  Shri .Premchandran";
  const formattedGroomParents = groomParents.startsWith('(') ? groomParents : `(${groomParents})`;

  const rawShloka = headerData?.shloka || [
    "मंगलम् भगवान विष्णुः, मंगलम् गरुणध्वजः।",
    "मंगलम् पुण्डरी काक्षः, मंगलाय तनो हरिः॥"
  ];

  const shlokaLines = Array.isArray(rawShloka)
    ? rawShloka
    : (typeof rawShloka === 'string' && rawShloka.includes('।')
        ? rawShloka
            .split('।')
            .filter((s) => s.trim().length > 0)
            .map((s, i, arr) => (i < arr.length - 1 ? `${s.trim()}।` : (s.trim().endsWith('॥') ? s.trim() : `${s.trim()}॥`)))
        : [rawShloka]);

  const rawGrace = headerData?.graceLines || [
    "With the infinite grace of Lord Ganesha",
    "and the everlasting blessings of our parents"
  ];

  const graceLines = Array.isArray(rawGrace)
    ? rawGrace
    : (typeof rawGrace === 'string' && rawGrace.includes('and the')
        ? [rawGrace.substring(0, rawGrace.indexOf('and the')).trim(), rawGrace.substring(rawGrace.indexOf('and the')).trim()]
        : [rawGrace]);

  const rawInvitation = headerData?.invitationLines || [
    "We are delighted to",
    "invite you to celebrate the union of"
  ];

  const invitationLines = Array.isArray(rawInvitation)
    ? rawInvitation
    : (typeof rawInvitation === 'string' && rawInvitation.includes('\n')
        ? rawInvitation.split('\n').map((s) => s.trim()).filter(Boolean)
        : (typeof rawInvitation === 'string' && rawInvitation.includes('invite you')
            ? [
                rawInvitation.substring(0, rawInvitation.indexOf('invite you')).trim(),
                rawInvitation.substring(rawInvitation.indexOf('invite you')).trim()
              ]
            : [rawInvitation]));

  return (
    <header 
      className="wedding-header"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="header-overlay" aria-hidden="true"></div>

      <div className="header-content">
        {/* 1. Auspicious Monogram Emblem */}
        <div className="header-placeholder-box scroll-reveal" aria-label="Wedding Monogram Emblem">
          {emblemSrc && (
            <img 
              src={emblemSrc} 
              alt="Wedding Monogram Emblem" 
              className="header-placeholder-img"
              width="88"
              height="120"
              loading="eager"
            />
          )}
        </div>

        {/* 2. Auspicious Sanskrit Shloka */}
        <div className="header-shloka scroll-reveal">
          {shlokaLines.map((line, index) => (
            <p key={index} className="shloka-line">{line}</p>
          ))}
        </div>

        {/* 3. Grace & Blessings */}
        <div className="header-grace scroll-reveal">
          {graceLines.map((line, index) => (
            <p key={index} className="grace-line">{line}</p>
          ))}
        </div>

        {/* 4. Invitation Lead */}
        <div className="header-invitation scroll-reveal">
          {invitationLines.map((line, index) => (
            <p key={index} className="invitation-line">{line}</p>
          ))}
        </div>

        {/* 5. Bride Details */}
        <div className="header-person bride-block scroll-reveal">
          <h2 className="person-name">{brideFirstName}</h2>
          <p className="person-parents">{formattedBrideParents}</p>
        </div>

        {/* 6. Ampersand */}
        <div className="header-ampersand scroll-reveal" aria-hidden="true">&</div>

        {/* 7. Groom Details */}
        <div className="header-person groom-block scroll-reveal">
          <h2 className="person-name">{groomFirstName}</h2>
          <p className="person-parents">{formattedGroomParents}</p>
        </div>
      </div>
    </header>
  );
}
