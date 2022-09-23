import React from "react";
import SupportCard from "./SupportCard/SupportCard";
import './SupportPage.css'

const lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
const supportTitles = ["Tecnical issues","Orders and payments","Account and store","Polices","General info"]


const SupportPage = () => {
    let listOfSupportCards = [];
    supportTitles.map((title,index) => {
        listOfSupportCards.push(<SupportCard key={index+"_supCard"} supTitle={title} paragraf={lorem_ipsum}/>)
        return null;
    })

    return(
        <div className="containerSupPag">
            {listOfSupportCards}
        </div>
    )
}

export default SupportPage;