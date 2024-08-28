import React from 'react';
import AMimg1 from './img/UCLG-Africa Meeting1.jpg';
import AMimg2 from './img/UCLG-Africa Meeting2.jpg';
import AGR1 from './img/agr1.jpg';
import hq1 from './img/hq1.jpg';
import hq2 from './img/hq2.jpg';
import hq3 from './img/hq3.jpg';
import hq4 from './img/hq4.jpg';
import hq5 from './img/hq5.jpg';
import hq6 from './img/hq6.jpg';
import ParagraphNavigator from './ParagraphNavigator';
import ImageSlider from './ImageSlider';
import '../Styles.css';

const paragraphs1 = [
  "NARO, part of UCLG Africa, has been a cornerstone in advancing local governance and regional development in North Africa since 2018. Through strategic initiatives, NARO has empowered local authorities, promoted sustainable urban development, and fostered regional cooperation among municipalities.",
  "Our efforts include key projects such as capacity-building programs, advocacy for local government interests, and the facilitation of resource sharing among municipalities, all contributing to a more cohesive and resilient governance framework in the region."
];

const paragraphs2 = [
  "His Excellency Ambassador Mohamed Higazy was nominated as Director of the UCLGA Cairo Office, a role reflecting Egypt's ongoing commitment to fostering local governance and development across Africa. This nomination, made official on August 3, 2019, positions Ambassador Dr. Higazy as a key figure in advancing sustainable urban development and democratic local governance on the continent.",
  
  "With extensive expertise in urban planning and sustainable development, Ambassador Dr. Higazy is expected to enhance UCLGA's mission by promoting regional cooperation among African municipalities. His leadership at the Cairo office will strengthen UCLGA's impact, supporting local authorities in building inclusive, sustainable, and prosperous communities across Africa.",
  
  "UCLGA is a key player in advancing the interests of local governments in Africa. With Ambassador Dr. Higazy at the helm of its Cairo office, the organization is poised to strengthen its impact and reach across the continent, supporting local authorities in their efforts to build inclusive, sustainable, and prosperous communities.",
  
  "Ambassador Dr. Higazy's nomination is a testament to Egypt's dedication to promoting local governance and sustainable development in Africa. By appointing a leader of his caliber, the Egyptian government reaffirms its commitment to advancing the goals of UCLGA and empowering local authorities to drive positive change in their communities.",
  
  "As Ambassador Dr. Higazy assumes his new role, he is poised to make a significant contribution to the work of UCLGA and the cause of local governance in Africa. His appointment marks a new chapter in the organization's history, one that promises to bring fresh perspectives, innovative solutions, and impactful initiatives to the forefront of the continent's development agenda."
];

const paragraphs3 = [
  "The Minister of Local Development hosted the twenty-fifth session of the meetings of the Executive Council and the African Expanded Council of the United Cities and Local Governments Organization - Africa in June 2021.",
  
  "Bilateral and qualitative meetings were held with the participating delegations to discuss some related issues.",
  
  "Cairo, June 17-18, 2021 — The city of Cairo, Egypt, hosted the 25th Ordinary Session of the Executive Committee of United Cities and Local Governments of Africa (UCLG Africa) on June 17-18, 2021. The opening ceremony on June 17 was presided over by Mr. Mahmoud Shaarawy, Egypt's Minister of Local Development, Vice President of UCLG Africa for the North Africa region, and President of UCLG World, along with other distinguished officials including the Governor of Cairo, Mr. Khaled Abdel Aal, and the Secretary-General of UCLG Africa, Mr. Jean-Pierre Elong Mbassi. The event was attended by members of the Executive Committee, Egyptian authorities, and development partners.",
  
  "In his opening speech, Minister Mahmoud Shaarawy emphasized Egypt's growing interest in the African continent since 2014, highlighting the country's achievements in infrastructure development over the past seven years, including the construction of 20 new cities. He expressed Egypt's commitment to sharing its successful experiences with its African counterparts.",
  
  "Dr. Boudra, expressing satisfaction with UCLG Africa's efforts to improve the state of cities and local authorities in African countries, highlighted the importance of this meeting in enriching the discussion on sustainable development and local democracy in Africa.",
  
  "The Governor of Cairo, Mr. Khaled Abdel Aal, recognized the significance of UCLG Africa's decision to establish its North Africa Regional Office (NARO) in Cairo, describing it as a 'beacon of knowledge' for addressing the challenges faced by African cities.",
  
  "The Governor of Kisumu, Mr. Peter Anyang’ Nyong’o, confirmed that Kisumu was prepared to host the 9th edition of the African Cities Summit scheduled for April 26-30, 2022, despite the challenges posed by the COVID-19 pandemic. He expressed confidence in Kenya's ability to deliver a memorable event.",
  
  "The Secretary-General of UCLG Africa, Mr. Jean-Pierre Elong Mbassi, reaffirmed Egypt's pivotal role in the organization's history, recalling the first meeting of the Pan-African Council of Local and Regional Authorities held in Cairo in 2010."
];

const paragraphs4 = [
  "Following the opening ceremony, Egypt's Prime Minister Mostafa Madbouly welcomed the UCLG Africa Executive Committee delegation, during which the agreement was signed to host the UCLG Africa North Africa Regional Office (NARO) in Cairo. The delegation included several high-ranking officials from across Africa.",
  "Prime Minister Madbouly expressed Egypt's pride in hosting the 25th session of UCLG Africa's Executive Committee and reiterated Egypt's support for Kenya in organizing the upcoming African Cities Summit in Kisumu."
];

const images = [
  hq1,
  hq2,
  hq3,
  hq4,
  hq5,
  hq6
];

const HomePage = () => (
  
  <div className="home-page">
    <div className="home-content">
        <div className="section">
            <h1>Welcome to NARO</h1>
        </div>
        <div className="section">
            <h2>North Africa Regional Office (NARO)</h2>
            <ParagraphNavigator paragraphs={paragraphs1} />
        </div>
        <div className="section">
          <h2>Head of UCLG office in Cairo</h2>
          <ParagraphNavigator paragraphs={paragraphs2} />
        </div>
        <div className="section">
          <h2>Twenty-fifth session of the Executive Committee and the Pan African Council of UCLG-AFRICA</h2>
          
          <div style={{display: "flex", justifyContent: "center"}}>
            <img src={AMimg1} alt="UCLG-Africa Meeting" style={{width: "100%"}} />
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <img src={AMimg2} alt="UCLG-Africa Meeting" style={{width: "100%"}} />
          </div>
          <ParagraphNavigator paragraphs={paragraphs3} />
        </div>
        <div className="section">
          <h2>Signing of the NARO Headquarters Agreement</h2>
          <div style={{display: "flex", justifyContent: "center"}}>
            <img src={AGR1} alt="NARO Headquarters Agreement" style={{width: "100%"}} />
          </div>
          <ParagraphNavigator paragraphs={paragraphs4} />
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
);

export default HomePage;
