import React from 'react';
import FlipCountdown from './FlipCountdown';
import { Link } from 'react-router-dom';
import './AfroPage.css';

const ACPage = () => {

  return (
    <div className="wuf-container">
      <header className="wuf-header">
        <h1>Africities Summit in 2025</h1>
        <p><strong>Egypt to host 10th round of Africities Summit in 2025</strong></p>
      </header>
      <div className="wuf-countdown">
        <br/>
        <p><strong>4–8 November 2024, Cairo, Egypt</strong></p>
        <FlipCountdown targetDate="2024-11-04T00:00:00" />
      </div>
      <div className="wuf-illustration">
        <div className="illustration"></div>
      </div>
      <button className="explore-button"><Link to="/NARO/AfroCity/details">Explore More</Link></button>
    </div>
  );
};

export default ACPage;
