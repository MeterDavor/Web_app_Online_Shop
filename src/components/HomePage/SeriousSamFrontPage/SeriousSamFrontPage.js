import React from 'react'
import './SeriousSamFrontPage.css'
import serious_sam_image from '../../../images/Serious_Sam_home_page.jpg'
import {NavLink} from 'react-router-dom';

const SeriousSamFrontPage = () => (
    <NavLink to='/serioussamthefe' className="serious_sam_place">
            <img src={serious_sam_image} alt="front_page_Seriuous_sam" className='serious_sam_img'/>
        <div className="serious_sam_info">
            <div className="serious_sam_text">
                Serious Sam: The First Encounter
            </div>
            <div className="serious_sam_pricebox">
                <div className="percent_off_box">
                    -25%
                </div>
                <div className="prices_box">
                    <div className="old_price">
                        14.99&euro;
                    </div>
                    <div className="new_price">
                        11.25&euro;
                    </div>
                </div>
            </div>
        </div>
    </NavLink>
)
export default SeriousSamFrontPage