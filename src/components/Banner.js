import React, { useState, useEffect } from 'react';

import axios from '../axios';
import requests from '../requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        // Get a random movie
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);

            return requests;
        }

        fetchData();
    }, []);

    console.log(movie);

    return (
        <header>
            
        </header>
    )
}

export default Banner;
