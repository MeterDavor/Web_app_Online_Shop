import React from 'react'
import './NSFFrontPage.css'
import nfs_image from '../../../images/Need-For-Speed-home_page.jpg'
import {NavLink} from 'react-router-dom';
const NSFFrontPage = () => (
    <NavLink to='/needforspeed' className="nfs_place">
            <img src={nfs_image} alt="front_page_need_for_speed" className='nfs_img'/>
        <div className="nfs_info">
            <div className="nfs_text">
                Need For Speed
            </div>
            <div className="full_price_box">
                <div className="full_price">
                    9.99&euro;
                </div>
            </div>
        </div>
    </NavLink>
)
export default NSFFrontPage