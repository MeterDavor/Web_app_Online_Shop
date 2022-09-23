import React, {useState} from "react";
import './FilterTemplate.css'
import {TiTick} from 'react-icons/ti';

const FilterTemplate = ({LOAT, setActiveTags, tag}) => {
    let [isClicked,setClicked] = useState(false);
    
    if(!isClicked && LOAT.includes(tag)){
        setClicked(true);
    }
    if(isClicked && !LOAT.includes(tag))
    {
        setClicked(false);
    }
    const handleAddTag = (tagToAdd) => {
        setActiveTags((activeTags) => [
            ...activeTags,
            tagToAdd,
        ]);
    };

    const handleRemoveTag = (index) => {
        setActiveTags([
            ...LOAT.slice(0,index),
            ...LOAT.slice(index+1,LOAT.length),
        ]);
    };
    
    if(!isClicked)
    {
        return(
            <div className="filter_template"
            onClick={() => {
                setClicked(true);
                handleAddTag(tag);
            }}>
                <div className="filter_tick_box"></div>
                {tag}
            </div>
        )
    }
    else
    {   return(
            <div className="filter_template"
            onClick={() => {

                for(let i = 0; i < LOAT.length; i++)
                {
                    if(LOAT[i]===tag)
                    {
                        handleRemoveTag(i)
                    }
                }
                setClicked(false);
            }}>
                <div className="filter_tick_box"><TiTick/></div>
                {tag}
            </div>
        )
    }
}

export default FilterTemplate