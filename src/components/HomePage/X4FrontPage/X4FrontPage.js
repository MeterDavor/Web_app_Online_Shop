import React from 'react'
import './X4FrontPage.css'
import x4_image from '../../../images/X4_Foundations_home_page.jpg'
import {NavLink} from 'react-router-dom';

const X4FrontPage = () => (
    <NavLink to='/x4foundations' className="x4_place">
            <img src={x4_image} alt="front_page_X4" className='x4_img'/>
        <div className="x4_info">
            <div className="x4_text">
                X4: Foundations
            </div>
            <div className="full_price_box">
                <div className="full_price">
                    19.99&euro;
                </div>
            </div>
        </div>
    </NavLink>
)
export default X4FrontPage