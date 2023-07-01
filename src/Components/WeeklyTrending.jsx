import React, { useEffect, useState } from "react";
import Card from "./Card";
import options from "../Data/Options";

const WeeklyTrending = () => {
    let [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options);
            const actualdata = await res.json();
            setData(actualdata.results);
        } catch (error) {
            console.log(error);
        }           
    }
    useEffect(() => {
        getCovidData();
    },[]);
    return (
    <div className="card-holder">
        {
            data.map((curElem,idx) => {
                return <Card key = {idx} id = {curElem.id} poster_path = {curElem.poster_path}/>
            })
        }
    </div>)
}

export default WeeklyTrending;