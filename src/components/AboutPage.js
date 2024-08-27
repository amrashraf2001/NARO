import React, { useState } from 'react';
import '../Styles.css';

const AboutPage = () => {
  const [showVision, setShowVision] = useState(false);
  const [showMission, setShowMission] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="about-page">
      <div className="about-content">
        <h2 style={{color:'white'}}>About NARO</h2>

        <div className="section">
          <button onClick={() => setShowVision(!showVision)}>
            {showVision ? 'Hide Vision' : 'Show Vision'}
          </button>
          {showVision && (
            <div className="text-block">
              <h3>Vision</h3>
              <p>To unite North African members under a cohesive and influential regional office, advocating for democracy, equality, and sustainable development. NARO aims to empower North African local governments to actively contribute to the political and economic advancement of the region, ensuring their voices are heard and their impact is felt across the continent.</p>
            </div>
          )}
        </div>

        <div className="section">
          <button onClick={() => setShowMission(!showMission)}>
            {showMission ? 'Hide Mission' : 'Show Mission'}
          </button>
          {showMission && (
            <div className="text-block">
              <h3>Mission</h3>
              <p>
                <h4>Unite North African Local Governments:</h4>
                    <p>Promote the unification of North African local governments within the broader context of regional political and economic development, ensuring their representation in all relevant forums.</p>
                <h4>Establish Local Government as a Distinct Sphere:</h4>
                    <p>Advocate for the recognition of North African local governments as a distinct and integral sphere of governance, working in support of national and other governmental levels.</p>
                <h4>Ensure Democracy and Human Rights:</h4>
                    <p>Champion democracy, human rights, and the rule of law in North Africa, supporting local governments in their efforts to uphold these principles and values.</p>
                <h4>Promote Resource Sharing:</h4>
                    <p>Facilitate the sharing of resources, knowledge, and best practices among North African local governments, fostering collaboration and mutual support.</p>
                <h4>Empower Local Governments:</h4>
                    <p>Empower North African local governments to take an active role in the political and economic development of the region, ensuring their voices are heard and their impact is felt.</p>
                <h4>Pursue Sustainable Development:</h4>
                    <p>Promote sustainable development in North Africa, advocating for policies and initiatives that address the region's social, economic, and environmental challenges.</p>
             </p>
            </div>
          )}
        </div>

        <div className="section">
          <button onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          {showDetails && (
            <div className="text-block">
              <h3>Details</h3>
              <h4>The North African Regional Office (NARO) is part of the United Cities and Local Governments of Africa (UCLG-Africa). It focuses on enhancing local governance and sustainable development in North Africa. Here are some key points:</h4>

                  <p><h4>Mission:</h4> To support local authorities in North Africa by providing technical assistance and access to funding.
                  <h4>Activities:</h4> Includes workshops, cultural activities, and forums to promote good governance and development.
                  <h4>Partnerships:</h4> Collaborates with various national and international organizations to achieve its goals.
                  <h4>Strategic Goals:</h4> Aligns with broader initiatives like the African Union’s Agenda 2063 and the UN’s Sustainable Development Goals (SDGs) 2030.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
