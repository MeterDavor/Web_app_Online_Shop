import React from 'react'
import './HadesFrontPage.css'
import hades_image from '../../../images/hades_home_page.jpg'
import {NavLink} from 'react-router-dom';

const HadesFrontPage = () => (
    <NavLink to='/hades' className="hades_place">
        <div className="hades_picture">
            <img src={hades_image} alt="front_page_hades" className='hades_img'/>
        </div>
        <div className="hades_info">
            <div className="hades_text">
                HADES
            </div>
            <div className="hades_pricebox">
                <div className="percent_off_box">
                    -50%
                </div>
                <div className="prices_box">
                    <div className="old_price">
                        20.99&euro;
                    </div>
                    <div className="new_price">
                        10.49&euro;
                    </div>
                </div>
            </div>
        </div>
    </NavLink>
)
export default HadesFrontPage