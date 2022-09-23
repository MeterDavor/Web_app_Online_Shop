import React from "react";
import './FilterBox.css'
import ListOfFilters from "./ListOfFilters/ListOfFilters";
import {IoMdClose} from 'react-icons/io';

const FilterBox = ({setfilterBoxOpen,LOAT,setActiveTags}) => (
    <div className="container_FB">
        <div className="filterText_and_closeButton_wraper">
            <h2 className="filterText">Filter</h2>
            <div className="closeButton" onClick={() => {setfilterBoxOpen(false)}}><IoMdClose/></div>
        </div>
        <ListOfFilters LOAT={LOAT} setActiveTags={setActiveTags}/>
    </div>
)

export default FilterBox