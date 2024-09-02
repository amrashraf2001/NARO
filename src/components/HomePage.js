import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'


const HomePage = () => (
  
  <div className="afro-details">
    <header className="afro-header">
        <br />
        <div className="afro-countdown">
          <p>
            <strong>About Us</strong>
          </p>
        </div>
        <div className="header-content">
          {/* <button className="button-64" role="button" >
          <span className="text"><Link to="/NARO/about/vision" style={{ textDecoration: 'none', color: 'white' }}>Vision</Link></span>
          </button>
          <button className="button-64" role="button">
            <span className="text"><Link to="/NARO/about/mission" style={{ textDecoration: 'none', color: 'white' }}>Mission</Link></span>
          </button> */}
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

export default HomePage;
