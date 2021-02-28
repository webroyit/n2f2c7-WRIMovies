import React, { useState, useEffect } from 'react';

import axios from '../axios';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

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

    console.log(movies)

    return (
        <div>
            <h2>{title}</h2>

        </div>
    )
}

export default Row;
