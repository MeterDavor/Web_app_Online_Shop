import React from "react";
import './SearchNavHam.css'
import {FaSearch} from 'react-icons/fa';
import { Link } from "react-router-dom";
const SearchNavHam = () =>
<section>
    <Link to="/store" className='search_nav_ham'><FaSearch/>SEARCH</Link>
</section>
export default SearchNavHam