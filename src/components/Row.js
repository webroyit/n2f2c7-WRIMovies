import React, { useState, useEffect } from 'react';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import axios from '../axios';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        async function fetchData() {
            // Ex - https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US
            const request = await axios.get(fetchUrl);

            setMovies(request.data.results);
            return request;
        }

        fetchData();

        // If [], run once when the row loads, and don't run again
        // If you use variables that is being pulled in from outside, you need to include it in the array
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    const handleClick =  movie => {
        if (trailerUrl) {
            // Hide the old video
            setTrailerUrl('');
        } else {
            // Find the youtube link by movie name or title
            movieTrailer(movie?.title || movie?.name || "")
                .then(url => {
                    // https://www.youtube.com/watch?v=XtMThy8QKqU

                    // Get the id of youtube from the link
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}
            </div>

            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;
