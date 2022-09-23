import React from "react";
import './SupportCard.css'

const SupportCard = ({supTitle,paragraf}) => {
    return(
        <div className="containerSupCard">
            <h2>{supTitle}</h2>
            <p>{paragraf}</p>
        </div>
    )
}

export default SupportCard