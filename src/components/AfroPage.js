import React, { useState } from 'react';
import FlipCountdown from './FlipCountdown';
import { Link } from 'react-router-dom';
import './AfroPage.css';

const ACPage = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="wuf-container">
      <header className="wuf-header">
        <h1>Africities Summit in 2025</h1>
        <p><strong>Egypt to host 10th round of Africities Summit in 2025</strong></p>
      </header>
      <div className="wuf-countdown">
        <br />
        <p><strong>4–8 November 2024, Cairo, Egypt</strong></p>
        <FlipCountdown targetDate="2024-11-04T00:00:00" />
      </div>
      <div className="wuf-illustration">
        <div className="illustration"></div>
      </div>

      {/* Updated button with inline styles and hover effects */}
      <button
        style={{
          alignItems: 'center',
          backgroundColor: hover ? '#ffdeda' : '#fee6e3',
          border: '2px solid #111',
          borderRadius: '8px',
          boxSizing: 'border-box',
          color: '#111',
          cursor: 'pointer',
          display: 'flex',
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          height: '48px',
          justifyContent: 'center',
          lineHeight: '24px',
          maxWidth: '100%',
          padding: '0 25px',
          position: 'relative',
          textAlign: 'center',
          textDecoration: 'none',
          userSelect: 'none',
          touchAction: 'manipulation',
          outline: 0,
          transition: 'transform .2s ease-out',
          transform: hover ? 'translate(0, 0)' : 'translate(8px, 8px)',
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link
          to="/NARO/AfroCity/details"
          style={{
            color: '#111',
            textDecoration: 'none',
          }}
        >
          Explore More
        </Link>
      </button>
    </div>
  );
};

export default ACPage;
