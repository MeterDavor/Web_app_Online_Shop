import {React,useState} from 'react';
import './GameDetailsPage.css'
import SystemRequerments from './SystemRequerments/SystemRequerments';
import BuyBox from './BuyBox/BuyBox';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';


const GameDetailsPage = ({gameDetails}) => {
    const [bigPuctureLink,setBPL] = useState(gameDetails.bigPicture)
    document.title = "OGS "+gameDetails.title;
    let title = gameDetails.title;
    if(gameDetails.title === "")
    {
        title = "TitlePlaceHolder"
    }
    let aboutTheGame = gameDetails.aboutTheGame;
    let reviews = gameDetails.reviews;
    if(gameDetails.aboutTheGame === '')
    {
        aboutTheGame ="ABOUT_THE_GAME place holder\n!\"#$%&/()="
    }
    if(gameDetails.reviews === '')
    {
        reviews ="ReViews place holder\n!\"#$%&/()="
    }
    let winSysReq = {
        min:{
            OS:gameDetails.systemReq.win.min.OS,
            Procesor:gameDetails.systemReq.win.min.Procesor,
            Mem:gameDetails.systemReq.win.min.Mem,
            GrphCard:gameDetails.systemReq.win.min.GrphCard,
            Storage:gameDetails.systemReq.win.min.Storage,
        },
        rec:{
            OS:gameDetails.systemReq.win.rec.OS,
            Procesor:gameDetails.systemReq.win.rec.Procesor,
            Mem:gameDetails.systemReq.win.rec.Mem,
            GrphCard:gameDetails.systemReq.win.rec.GrphCard,
            Storage:gameDetails.systemReq.win.rec.Storage,
        }
    }
    if(winSysReq.min.OS === '')
    {
        winSysReq.min.OS = 'Not specified'
    }
    if(winSysReq.min.Procesor === '')
    {
        winSysReq.min.Procesor = 'Not specified'
    }
    if(winSysReq.min.Mem === '')
    {
        winSysReq.min.Mem = 'Not specified'
    }
    if(winSysReq.min.GrphCard === '')
    {
        winSysReq.min.GrphCard = 'Not specified'
    }
    if(winSysReq.min.Storage === '')
    {
        winSysReq.min.Storage = 'Not specified'
    }

    if(winSysReq.rec.OS === '')
    {
        winSysReq.rec.OS = 'Not specified'
    }
    if(winSysReq.rec.Procesor === '')
    {
        winSysReq.rec.Procesor = 'Not specified'
    }
    if(winSysReq.rec.Mem === '')
    {
        winSysReq.rec.Mem = 'Not specified'
    }
    if(winSysReq.rec.GrphCard === '')
    {
        winSysReq.rec.GrphCard = 'Not specified'
    }
    if(winSysReq.rec.Storage === '')
    {
        winSysReq.rec.Storage = 'Not specified'
    }

    let macSysReq = {
        min:{
            OS:gameDetails.systemReq.mac.min.OS,
            Procesor:gameDetails.systemReq.mac.min.Procesor,
            Mem:gameDetails.systemReq.mac.min.Mem,
            GrphCard:gameDetails.systemReq.mac.min.GrphCard,
            Storage:gameDetails.systemReq.mac.min.Storage,
        },
        rec:{
            OS:gameDetails.systemReq.mac.rec.OS,
            Procesor:gameDetails.systemReq.mac.rec.Procesor,
            Mem:gameDetails.systemReq.mac.rec.Mem,
            GrphCard:gameDetails.systemReq.mac.rec.GrphCard,
            Storage:gameDetails.systemReq.mac.rec.Storage,
        }
    }
    if(macSysReq.min.OS === '')
    {
        macSysReq.min.OS = 'Not specified'
    }
    if(macSysReq.min.Procesor === '')
    {
        macSysReq.min.Procesor = 'Not specified'
    }
    if(macSysReq.min.Mem === '')
    {
        macSysReq.min.Mem = 'Not specified'
    }
    if(macSysReq.min.GrphCard === '')
    {
        macSysReq.min.GrphCard = 'Not specified'
    }
    if(macSysReq.min.Storage === '')
    {
        macSysReq.min.Storage = 'Not specified'
    }

    if(macSysReq.rec.OS === '')
    {
        macSysReq.rec.OS = 'Not specified'
    }
    if(macSysReq.rec.Procesor === '')
    {
        macSysReq.rec.Procesor = 'Not specified'
    }
    if(macSysReq.rec.Mem === '')
    {
        macSysReq.rec.Mem = 'Not specified'
    }
    if(macSysReq.rec.GrphCard === '')
    {
        macSysReq.rec.GrphCard = 'Not specified'
    }
    if(macSysReq.rec.Storage === '')
    {
        macSysReq.rec.Storage = 'Not specified'
    }
    let listOfScreenshots = [];
    gameDetails.screenshots.map((linkForScrShot,index) => {
        if(gameDetails.screenshots[index+1]!==undefined){
            listOfScreenshots.push(<img src={linkForScrShot} alt="ScrShotAlt" 
            onMouseEnter={() =>setBPL(linkForScrShot)}
            onMouseLeave={() =>setBPL(gameDetails.bigPicture)}
            key={title+index+"_screenShotImg"}
            className="screenshot_images"/>)
        }
        else{
            listOfScreenshots.push(<img src={linkForScrShot} alt="ScrShotAlt" 
            onMouseEnter={() =>setBPL(linkForScrShot)}
            onMouseLeave={() =>setBPL(gameDetails.bigPicture)}
            key={title+index+"_screenShotImg"}
            className="screenshot_images_last"/>)
        }
        return null;
    })
    return (
    <div className='containerGDP'>
        <div className='BuyBoxInTheMiddle'>
            <h1 className='titleText'>
                {title}
            </h1>
            <BuyBox fullprice={gameDetails.full_price} discount={gameDetails.discount}/>
        </div>
        <img src={bigPuctureLink} alt="BigPicAlt" className='bigPicture'/>
        <h2 className='aboutTheGameParagraf'>
            Screenshots
        </h2>
        <div className='listOfScreenshots'>
            <ScrollMenu>
                {listOfScreenshots}
            </ScrollMenu>
        </div>
        <h2 className='aboutTheGameParagraf'>
        About the game:
        </h2>
        <p className='aboutTheGameParagraf'>
            {aboutTheGame}
        </p>
        <h2 className='aboutTheGameParagraf'>
        Reviews:
        </h2>
        <p className='aboutTheGameParagraf'>
            {reviews}
        </p>
        <div className='systemReqBox'>
            <h2 className='aboutTheGameParagraf'>System requerments:</h2>
            <h3 className='aboutTheGameParagraf'>Windows:</h3>
            <SystemRequerments systemReq={winSysReq} keyCode="win"/>
            <h3 className='aboutTheGameParagraf'>MacOs:</h3>
            <SystemRequerments systemReq={macSysReq} keyCode="mac"/>
        </div>
        <div className='BuyBoxInTheMiddle'>
            <BuyBox fullprice={gameDetails.full_price} discount={gameDetails.discount}/>
        </div>
    </div>
    );
};
  
export default GameDetailsPage;