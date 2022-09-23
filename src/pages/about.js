import React from 'react';
import AboutPage from '../components/AboutPage/AboutPage';
import Footer from '../components/Footer/Footer';
import './pages.css'
  
const About = () => {
  document.title = "OGS About";
  return (
    <div className='pages'>
        <AboutPage/>
        <Footer/>
    </div>
  );
};
  
export default About;