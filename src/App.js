import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactUsPage from './components/ContactUsPage';
import logo from './logo.png';

const App = () => (
  <div>
    <nav>
      <img src={logo} alt="NARO Logo" className='logoSmall' />
      <ul>
        <li><Link to="NARO/">Home</Link></li>
        <li><Link to="NARO/about">About</Link></li>
        <li><Link to="NARO/contact">Contact</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path='*' element={<HomePage />} />
      <Route path="NARO/" element={<HomePage />} />
      <Route path="NARO/about" element={<AboutPage />} />
      <Route path="NARO/contact" element={<ContactUsPage />} />
    </Routes>
  </div>
);

export default App;
