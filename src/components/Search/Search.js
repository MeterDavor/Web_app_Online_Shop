import React from "react";
import './Search.css'
import {FaSearch} from 'react-icons/fa';
import { Link } from "react-router-dom";
const Search = () =>
<section>
    <Link to="/store" className='search'><FaSearch/>SEARCH</Link>
</section>
export default Search