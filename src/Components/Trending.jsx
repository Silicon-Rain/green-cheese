import React from "react";
import DailyTrending from "./DailyTrending";
import WeeklyTrending from "./WeeklyTrending";

const Trending = () => {
    return (
        <>
            <div id="trending-col" className="main-cols">
                <div className="main-headings">TRENDING</div>
                <div className="sub-heading">DAILY</div>
                <DailyTrending/>
                <div className="sub-heading">WEEKLY</div>
                <WeeklyTrending/>
            </div>
            
        </>
    )
}

export default Trending;