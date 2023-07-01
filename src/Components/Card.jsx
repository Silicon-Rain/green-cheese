import React from "react";
import options from "../Data/Options";

const Card = (props) => {
    const path = "https://image.tmdb.org/t/p/original";
    const expand = async () => {
        const info = await fetch(`https://api.themoviedb.org/3/movie/` + props.id + `?language=en-US`, options);
        const movie = await info.json();
        document.getElementById('movie-container').style.display = 'block';
        document.getElementById('movie-container').scrollIntoView();
        document.getElementById('poster-and-info').style.backgroundImage= "linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)),url(" + path + movie.backdrop_path +")";
        document.getElementById('poster-and-info').style.backgroundRepeat = "no repeat";
        document.getElementById('poster-and-info').style.backgroundSize = "100% 100%";
        document.getElementById('poster-photo').src = path + movie.poster_path;
        document.getElementById('movie-title').innerHTML = movie.title;
        document.getElementById('movie-popularity').innerHTML = "Popularity: " +  movie.popularity;
        document.getElementById('movie-genre').innerHTML = "Genre: ";
        movie.genres.map((currgenre) => {document.getElementById('movie-genre').innerHTML += ("<span>"+currgenre.name+"</span>"); return null;});
        document.getElementById('movie-desc').innerHTML = "Overview: " + movie.overview;
        document.getElementById('movie-runtime').innerHTML = "🕑 " + parseInt(movie.runtime/60) + " hours " + (movie.runtime%60) + " minutes";
        document.getElementById('movie-lang').innerHTML = "Language(s): " + movie.original_language;
        document.getElementById('movie-adult').innerHTML = (movie.adult)?"18+":"";
    }
    return (
        <>
            <div className="cardclass" onClick={expand}>
                <img src={path + props.poster_path} alt="Img not found" className="card-poster"/>
            </div>
        </>        
    )
}

export default Card;