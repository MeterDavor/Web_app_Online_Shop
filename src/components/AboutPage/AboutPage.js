import React from "react";
import './AboutPage.css'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ButtonLink = styled(Link)`
    display: flex;
    font-weight: bold;
    color: white;
    align-items: center;
    text-decoration: none;
    font-size: 30px;
    width: auto;
    padding: 15px;
    background-color: #414141;
    outline-style: solid;
    outline-width: 1.5px;
    outline-color: white;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    margin-bottom:30px;
    box-shadow: 2px 2px 4px white;
    &:hover{
        background-color: #5a5a5a;
        outline-color: white;
        border-color: white;
        outline-width: 1.5px;
        box-shadow: 3px 3px 5px white;
    }
    &:active{
        background-color: #2e2e2e;
        box-shadow: none;
    }
`;


const AboutPage = () => {
    return(
        <div className="containerAP">
            <p className="not_a_real">THIS IS NOT A REAL SHOP!<br/>
                THIS IS FOR EDUCATIONAL PURPOSES!</p>
            <h1 className="title_h1">Online Game Shop</h1>
            <h2 className="digital_market">
                Digital marketplace for distibution of PC games
            </h2>
            <div className="containerBuyGames">
                <h2 className="buyGamesInst">Buy games Instantly</h2>
                <p className="paragraf_with">With nearly 30,000 games from AAA to indie and everything in-between. Enjoy exclusive deals and other great perks.</p>
                <ButtonLink to='/store'>Browse the store</ButtonLink>
            </div>
        </div>
    )
}

export default AboutPage