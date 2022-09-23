import React from "react";
import './ButtonForFilterBoxOpen.css'

const ButtonForFilterBoxOpen = ({onClick}) => (
    <button className="container_BFFBO" onClick={onClick}>
        <h2 className="filterText_BFFBO">Filter</h2>
    </button>
)
export default ButtonForFilterBoxOpen