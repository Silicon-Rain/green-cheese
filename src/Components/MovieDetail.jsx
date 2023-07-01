import React from "react";

const MovieDetail = () => {
    return (
        <>
            <div id="movie-container">
                <div id="poster-and-info">
                    <img alt="img not found" id="poster-photo" />
                    <div className="info-container">
                        <div id="movie-title"></div>
                        <div id="movie-popularity" className="info-detail"></div>
                        <div id="movie-genre" className="info-detail"></div>
                        <div id="movie-desc" className="info-detail"></div>
                        <div id="movie-runtime" className="info-detail"></div>
                        <div id="movie-lang" className="info-detail"></div>
                        <div id="movie-releasedate" className="info-detail"></div>
                        <div id="movie-adult" className="info-detail"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetail;