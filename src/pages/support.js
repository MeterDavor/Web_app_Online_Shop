import React from 'react';
import Footer from '../components/Footer/Footer';
import SupportPage from '../components/SupportPage/SupportPage';
import './pages.css'
  
const Support = () => {
  document.title = "OGS Support";
  return (
    <div className='pages'>
        <SupportPage/>
        <Footer/>
    </div>
  );
};
  
export default Support;