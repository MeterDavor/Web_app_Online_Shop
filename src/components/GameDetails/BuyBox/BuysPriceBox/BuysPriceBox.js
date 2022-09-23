import React from "react";
import './BuysPriceBox.css'
const BuysPriceBox = ({fullprice,discount}) => {
    if(discount <=0)
    {
        return(
            <div className="buys_fullpricebox">
                {fullprice}&euro;
            </div>
        )
    }
    else
    {
        let new_price = fullprice-fullprice*discount/100;
        return(
            
            <div className="buys_discount_pricebox">
                <div className="buys_discount_number_text">
                    {new_price.toFixed(2)}&euro;
                </div>
                <div className="buys_discount_off_text_box">
                    <div>Full price: </div><div className="buys_discount_off_number">{fullprice}&euro;</div>
                </div>
            </div>
        )
    }
}
export default BuysPriceBox