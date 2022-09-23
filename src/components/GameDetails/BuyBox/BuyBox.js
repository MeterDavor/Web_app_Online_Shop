import React,{useContext} from "react";
import './BuyBox.css'
import BuysPriceBox from "./BuysPriceBox/BuysPriceBox";
import { UserContext } from "../../../UserContext/UserContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { users_list } from "../../../constants/users";

const ButtonLink = styled(Link)`
display:flex;
background-color: #22BF1F;
width: 50%;
height: 100%;
color: black;
font-size: 3em;
border: 2px solid black;
cursor: pointer;
border-radius: 20px;
box-shadow: 1px 1px 2px black;
text-align: center;
justify-content: center;
align-items: center;
    &:hover{
        background-color: #32ff2e;
        box-shadow: 2px 2px 5px black;
        border: 2px solid black;
    }
    &:active{
        background-color: #418b56;
        box-shadow: none;
    }
`;

const BuyBox = ({fullprice,discount}) => {
    const{user} = useContext(UserContext)

    const new_price = fullprice - fullprice*discount/100

    function buyGame(){
        if(user.money >= new_price)
        {
            users_list.map((profile)=>{
                if(profile.idU === user.userId && profile.username === user.username && profile.email === user.email)
                {
                    if(profile.money >= new_price)
                    profile.money = profile.money - new_price
                    user.money = profile.money
                }
                return null
            })
        }
    }

    let buyButton;
    if(user.loggedIn)
    {
        buyButton = <button onClick={buyGame} className="buyButton">BUY</button>
    }
    else
    {
        buyButton = <ButtonLink to='/login'>BUY</ButtonLink>
    }

    return (
        <div className="containerBuyBox">
            {buyButton}
            <BuysPriceBox fullprice={fullprice} discount={discount}/>
        </div>
    );
};

export default BuyBox;