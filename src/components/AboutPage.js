import React, { useState } from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
  <div className="afro-details">
  <header className="afro-header">
    <br />
    <div className="afro-countdown">
      <p>
        <strong>About Us</strong>
      </p>
    </div>
    <div className="header-content">
      <button className="explore-button">
        <Link to="/NARO/about/vision">Vision</Link>
      </button>
      <button className="explore-button">
        <Link to="/NARO/about/mission">Mission</Link>
      </button>

      
    </div>
    <div className="header-image">
      <img
        src="https://img.youm7.com/ArticleImgs/2019/6/19/97159-WhatsApp-Image-2019-06-19-at-5.35.27-PM-(1).jpeg"
        alt="Africities Summit"
      />
    </div>
  </header>
</div>
);
};

export default AboutPage;
