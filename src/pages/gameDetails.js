import React from 'react';
import Footer from '../components/Footer/Footer';
import GameDetailsPage from '../components/GameDetails/GameDetailsPage';
import './pages.css'
  
const GameDetails = ({gameDetails}) => {
  return (
    <div className='pages'>
        <GameDetailsPage gameDetails={gameDetails}/>
        <Footer/>
    </div>
  );
};
  
export default GameDetails;