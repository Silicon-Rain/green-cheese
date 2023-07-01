import React, { useState } from "react";
import options from "../Data/Options";
import SearchCard from "./SearchCard";

const Search = () => {
    const [data,setData] = useState([]);
    const showOptions = async () => {
        const text = document.getElementById('search-bar').value;
        const res = await fetch('https://api.themoviedb.org/3/search/movie?query='+text+'&language=en&page=1', options);
        const newdata = await res.json();
        setData(newdata.results);
        document.getElementById('drop-down').style.display = 'block';
    }
    return (
        <>
            <input type="name" onKeyUp={showOptions} id="search-bar" placeholder="Search..."></input>            
            <div id="drop-down">  
                {data.map((currcard) => {return <><SearchCard id={currcard.id} title={currcard.title}/></>})}            
            </div>
        </>
    )
}

export default Search;