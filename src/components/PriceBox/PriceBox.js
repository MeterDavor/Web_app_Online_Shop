import React from "react";
import './PriceBox.css'
const PriceBox = ({discount,full_price}) => {
    if(discount <=0)
    {
        return(
            <div className="full_pricebox">
                {full_price}&euro;
            </div>
        )
    }
    else
    {
        let new_price = full_price-full_price*discount/100;
        return(
            
            <div className="discount_pricebox">
                <div className="discount_off_text">
                    -{discount}%
                </div>
                <div className="discount_number_text">
                    {new_price.toFixed(2)}&euro;
                </div> 
            </div>
        )
    }
}
export default PriceBox