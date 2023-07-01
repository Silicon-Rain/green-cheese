import React from "react";
import Search from "./Search";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div id="main-logo">GREEN CHEESE</div>
                <a href="#trending-col" className="navelem">TRENDING</a>
                <a href="#popular-col" className="navelem">POPULAR</a>
                <a href="#upcoming-col" className="navelem">UPCOMING</a>
                <Search/>
            </div>
        </>
    )
}

export default Navbar;