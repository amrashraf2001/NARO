import React from 'react';
import { Link } from 'react-router-dom';
import AMimg1 from './img/UCLG-Africa Meeting1.jpg';
import AMimg2 from './img/UCLG-Africa Meeting2.jpg';
import AGR1 from './img/agr1.jpg';
import hq1 from './img/hq1.jpg';
import hq2 from './img/hq2.jpg';
import hq3 from './img/hq3.jpg';
import hq4 from './img/hq4.jpg';
import hq5 from './img/hq5.jpg';
import hq6 from './img/hq6.jpg';
import '../Styles.css';


const HomePage = () => (
  
  <div className="home-page">
    <div className="home-content">
        <div className="section">
            <h1>Welcome to NARO</h1>
        </div>
        <div className="box">
        <div className="section">
            <h2>North Africa Regional Office (NARO)</h2>
            <p>NARO, part of UCLG Africa, has been a cornerstone in advancing.......</p>
            <Link to="/NARO/details"><p>Read more</p></Link>
        </div>
        <div className="section">
          <h2>Head of UCLG office in Cairo</h2>
          <p>His Excellency Ambassador Mohamed Higazy was nominated as Director of the UCLGA Cairo Office, a role reflecting Egypt's ongoing......</p>
          <Link to="/NARO/head"><p>Read more</p></Link>

        </div>
        <div className="section">
          <h2>Twenty-fifth session of the Executive Committee and the Pan African Council of UCLG-AFRICA</h2>
          
          <div style={{display: "flex", justifyContent: "center"}}>
            <img src={AMimg1} alt="UCLG-Africa Meeting" style={{width: "100%"}} />
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <img src={AMimg2} alt="UCLG-Africa Meeting" style={{width: "100%"}} />
          </div>
          <p>The Minister of Local Development hosted the twenty-fifth session of the meetings of.......</p>
          <Link to="/NARO/25session"><p>Read more</p></Link>
        </div>
        <div className="section">
          <h2>Signing of the NARO Headquarters Agreement</h2>
          <div style={{display: "flex", justifyContent: "center"}}>
            <img src={AGR1} alt="NARO Headquarters Agreement" style={{width: "100%"}} />
          </div>
          <p>Following the opening ceremony, Egypt's Prime Minister Mostafa Madbouly.......</p>
          <Link to="/NARO.HQ-Agreement"><p>Read more</p></Link>
        </div>
        <div className="section">
          <h2>Photos of the headquarters of the North African region<br/>
            Organization of African United Cities and Local Governments
          </h2>
          <div style={{display: "flex", justifyContent: "center"}}>
            <img src={hq1} alt="NARO Headquarters" style={{width: "100%"}} />
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <img src={hq2} alt="NARO Headquarters" style={{width: "100%"}} />
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <img src={hq3} alt="NARO Headquarters" style={{width: "100%"}} />
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <img src={hq4} alt="NARO Headquarters" style={{width: "100%"}} />
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <img src={hq5} alt="NARO Headquarters" style={{width: "100%"}} />
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <img src={hq6} alt="NARO Headquarters" style={{width: "100%"}} />
          </div>
        </div>  
      </div>
    </div>
  </div>
);

export default HomePage;
