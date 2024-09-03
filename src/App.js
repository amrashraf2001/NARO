import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactUsPage from './components/ContactUsPage';
import AfroPage from './components/AfroPage';
import AfroDetails from './components/AfroDetails';
import VisionPage from './components/VisonPage';
import MissionPage from './components/MissionPage';
import logo from './logo.png';
import Card from './components/Card';
import AMH from './components/img/AMH.jpg';
import logoo from './components/img/logoo.jpg';
import AMimg2 from './components/img/UCLG-Africa Meeting2.jpg';
import AGR1 from './components/img/agr1.jpg';

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

const App = () => (
  <div>
    <nav>
      <img src={logo} alt="NARO Logo" className='logoSmall' />
      <ul>
        <li><Link to="NARO/">Home</Link></li>
        <li><Link to="NARO/about">About</Link></li>
        <li><Link to="NARO/contact">Contact</Link></li>
        <li><Link to="NARO/AfroCity">Africities</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path='*' element={<HomePage />} />
      <Route path="NARO/" element={<HomePage />} />
      <Route path="NARO/about" element={<AboutPage />} />
      <Route path="NARO/contact" element={<ContactUsPage />} />
      <Route path="/NARO/head" element={<Card title={'Ambassador Dr. Mohamed Higazy'} img={AMH} paragraphs={paragraphs2} />} />
      <Route path="/NARO/details" element={<Card title={'NARO'} img={logoo} paragraphs={paragraphs1} />} />
      <Route path="/NARO/25session" element={<Card title={'25th Session of UCLG Africa'} img={AMimg2} paragraphs={paragraphs3} />} />
      <Route path="/NARO.HQ-Agreement" element={<Card title={'UCLG Africa HQ Agreement'} img={AGR1} paragraphs={paragraphs4} />} />
      <Route path="NARO/AfroCity" element={<AfroPage />} />
      <Route path="NARO/AfroCity/details" element={<AfroDetails />} />
      <Route path="/NARO/about/vision" element={<VisionPage/>} />
      <Route path="/NARO/about/mission" element={<MissionPage/>} />
    </Routes>
  </div>
);

export default App;
