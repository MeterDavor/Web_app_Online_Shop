import React from "react";
import PriceBox from "../../PriceBox/PriceBox";
import './StorePageTemplateForItems.css'
import {NavLink} from 'react-router-dom';

const StorePageTemplateForItems = ({thumbnail,title,tags,discount,full_price,link}) => (
    
    <NavLink to={link} className="container_SPTFI">
        <div className="grid_container">
            <div  className="picture_thumbnail" >
                <img src={thumbnail} alt="thumb" ></img>
            </div>
            <div className="title_and_tags">
                <div className="title_font">
                    {title}
                </div>
                <div className="tags_font">
                    {tags[0]}, {tags[1]}
                </div>
            </div>
            <div className="price_box">
                <PriceBox discount={discount} full_price={full_price}/>
            </div>
        </div>
    </NavLink>

)
export default StorePageTemplateForItems