import React from 'react';
import './AfroDetails.css';

const AfroDetails = () => {
    return (
        <div className="afro-details">
            <header className="afro-header">
                <div className="header-content">
                    <h1>Africities Summit 2025</h1>
                    <p><strong>Egypt to host the 10th Africities Summit</strong></p>
                </div>
                <div className="header-image">
                    <img src="https://images.pexels.com/photos/3772630/pexels-photo-3772630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Africities Summit" />
                </div>
            </header>
            <div className="afro-countdown">
                <p><strong>4–8 November 2025, Cairo, Egypt</strong></p>
            </div>
            <div className="afro-illustration">
                <img src="https://english.ahram.org.eg/Media/News/2022/11/10/41_2022-638036881108917492-891.jpg" alt="Illustration" />
            </div>
            <div className="afro-details-content">
                <h2>About the Event</h2>
                <p>The Africities Summit is a major gathering of local government leaders, experts, and stakeholders from across Africa, focusing on urban management and sustainable development.</p>
                
                <h2>Key Themes</h2>
                <ul>
                    <li>Climate Change: Addressing the impact of climate change on African cities and exploring sustainable solutions.</li>
                    <li>Infrastructure Development: Discussing strategies for developing resilient and sustainable infrastructure in urban areas.</li>
                    <li>Sustainable Development Goals (SDGs): The role of local governments in achieving the United Nations' SDGs.</li>
                </ul>
                
                <h2>Participants</h2>
                <p>The summit is expected to bring together thousands of participants, including representatives from over 100 cities across Africa, international organizations, and development partners.</p>
                
                <h2>Objectives</h2>
                <p>The main objectives of the summit are to create a platform for dialogue and cooperation between cities and regions in Africa, and to promote better governance and inclusive development.</p>
            </div>
        </div>
    );
}

export default AfroDetails;
