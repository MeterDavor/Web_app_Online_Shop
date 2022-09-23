import React from 'react';
import Footer from '../components/Footer/Footer';
import StorePage from '../components/StorePage/StorePage';
import './pages.css'
  
const Store = () => {
  document.title = "OGS Store";
  return (
    <div className='pages'>
        <StorePage/>
        <Footer/>
    </div>
    
  );
};
  
export default Store;