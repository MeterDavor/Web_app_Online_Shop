import React from "react";
import './ListOfFilters.css'
import {storePageTagFilters} from "../../../../constants/constants"
import FilterTemplate from "./FilterTemplate/FilterTemplate";

const ListOfFilters = ({LOAT,setActiveTags}) =>{
    const listOfTags = []
    storePageTagFilters.map((SPTFitems) =>{
        listOfTags.push(<FilterTemplate LOAT={LOAT} setActiveTags={setActiveTags} tag={SPTFitems.tag} key={SPTFitems.id}/>)
        return null;
    }
)
    return(
        <div className="container_LOF">
            {listOfTags}
        </div>
    )
}
export default ListOfFilters