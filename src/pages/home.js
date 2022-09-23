import React from 'react';
import Footer from '../components/Footer/Footer';
import HomePage from '../components/HomePage/homepage';
import './pages.css'
  
const Home = () => {
  document.title = "Online Game Shop";
  return (
    <div className='pages'>
        <HomePage/>
        <Footer/>
    </div>
  );
};
  
export default Home;