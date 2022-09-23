import React, { useState,useEffect} from "react";
import './StorePage.css'
import StorePageTemplateForItems from "./StorePageTemplateForItems/StorePageTemplateForItems";
import PaginatedItems from "../Paginate/Paginate";
import FilterBox from "./FilterBox/FilterBox";
import ButtonForFilterBoxOpen from "./ButtonForFilterBoxOpen/ButtonForFilterBoxOpen";
import { gamePageItems } from "../../constants/gamesDetailsData";
import SearchBar from "../SearchBar/SearchBar";
/*const arrayOfArrayOfTags = [...new Set(gamePageItems.map((elem) => elem.tags))];

function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}
export const filteringTags = [...new Set(flatten(arrayOfArrayOfTags))];*/

const StorePage = () => {
    let listOfSPIwithTempate = [];
    let storePageItemsFiltered = [];
    const [listOfActiveTags,setActiveTags] = useState([]);
    const [filterBoxOpen,setfilterBoxOpen] = useState(false);
    
    const handleFBOToggle = () => {
        setfilterBoxOpen(!filterBoxOpen)
    }

    const [screenWidth, getScreenWidth] = useState({
        priorWidth: window.innerWidth,
        dynamicWidth: window.innerWidth,
    })

    const setScreenWidth =()=>{
        getScreenWidth({
            priorWidth: screenWidth.dynamicWidth,
            dynamicWidth: window.innerWidth,
        })
    }
    useEffect(()=>{
        window.addEventListener('resize',setScreenWidth);
        return (()=>{
            window.removeEventListener('resize',setScreenWidth);
        })
    },[screenWidth])
    //SEARCH FUNCTION
    const [searchText,setSearchtext] = useState("")
    const handelInputSearch = event => {
        if(event.target.value.length >= 3){
            setSearchtext(event.target.value.toLowerCase())
        }
        else{
            setSearchtext("")
        }
    }
    let storePageItemsFilterdBySearchText = []
    //-----------------------
    if(listOfActiveTags.length<=0)
    {
        if(searchText.length >= 3){
            storePageItemsFilterdBySearchText = gamePageItems.filter((game) => {
                return game.title.toLowerCase().match(searchText+"*")
            });
            storePageItemsFilterdBySearchText.map((value) => {
                listOfSPIwithTempate.push(<StorePageTemplateForItems key={value.idGame} thumbnail={value.thumbnail} title={value.title} tags={value.tags} discount={value.discount} full_price={value.full_price} link={value.link}/>)
                return null;
            })
        }
        else{
            gamePageItems.map((value) => {
                listOfSPIwithTempate.push(<StorePageTemplateForItems key={value.idGame} thumbnail={value.thumbnail} title={value.title} tags={value.tags} discount={value.discount} full_price={value.full_price} link={value.link}/>)
                return null;
            })
        }

    }
    else
    {
        gamePageItems.map((element) => {
            listOfActiveTags.map((activeTag) => {
                element.tags.map((tag) => {
                    if(storePageItemsFiltered.filter(e => e === element).length === 0 && tag === activeTag)
                    storePageItemsFiltered.push(element)
                    return null;
                })
                return null;
            })
            return null;
        })
        if(searchText.length >= 3){
            storePageItemsFilterdBySearchText = storePageItemsFiltered.filter((game) => {
                return game.title.toLowerCase().match(searchText+"*")
            });
            storePageItemsFilterdBySearchText.map((value) => {
                listOfSPIwithTempate.push(<StorePageTemplateForItems key={value.idGame} thumbnail={value.thumbnail} title={value.title} tags={value.tags} discount={value.discount} full_price={value.full_price} link={value.link}/>)
                return null;
            })
        }
        else{
            storePageItemsFiltered.map((value) => {
                listOfSPIwithTempate.push(<StorePageTemplateForItems key={value.idGame} thumbnail={value.thumbnail} title={value.title} tags={value.tags} discount={value.discount} full_price={value.full_price} link={value.link}/>)
                return null;
            })
        }
    }
    if(screenWidth.dynamicWidth > 768 && filterBoxOpen)
    {setfilterBoxOpen(false)}

    return(
    <div className="wraper_conSP_search">
        <SearchBar
            handelInputSearch={handelInputSearch}
        />
        <div className="container_SP">
            <ButtonForFilterBoxOpen onClick={handleFBOToggle}/>
            <div className="minimizedFilterBox">
                {filterBoxOpen ? <FilterBox setfilterBoxOpen={setfilterBoxOpen} LOAT={listOfActiveTags} setActiveTags={setActiveTags}/> : null}
            </div>
            <div className="filter_box">
                <FilterBox setfilterBoxOpen={setfilterBoxOpen} LOAT={listOfActiveTags} setActiveTags={setActiveTags} />
            </div>
            <div className="store_page_templates">
            <PaginatedItems List={listOfSPIwithTempate}/>
            </div>
        </div>
    </div>
    )
}

export default StorePage