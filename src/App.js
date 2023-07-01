import Navbar from "./Components/Navbar"
import Intro from "./Components/Intro";
import Trending from "./Components/Trending"
import Popular from "./Components/Popular";
import MovieDetail from "./Components/MovieDetail";
import React from "react";
import Upcoming from "./Components/Upcoming";

function App() {
  
  return (
    <>
      <Navbar/>
      <Intro/>
      <Trending/>
      <Popular/>
      <Upcoming/>
      <MovieDetail/>
    </>
  ); 
}

export default App;
