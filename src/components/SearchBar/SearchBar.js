import React from "react";
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa';

const SearchBar = ({handelInputSearch}) => {
    return(
        <div className="container_SrchBar">
            <input className="search_input"
            id="search_input_form"
            type="text"
            placeholder="Search here"
            onChange={handelInputSearch}/>

            <label className="search_srchBar"
            htmlFor="search_input_form">
                <FaSearch/>
            </label>
        </div>
    )
}

export default SearchBar;