import React, { useState, useEffect } from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import axios from '../api/axios'
import FlipMove from 'react-flip-move'
import PropTypes from 'prop-types'

function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption)
                .then(res => res.data.results)
                .then(res => setMovies(res));
            return request;
        }
        fetchData();
    }, [selectedOption])

    return (
        <div className='results'>
            <FlipMove>
                {movies.map((movie) => <VideoCard key={movie.id} movie={movie} />)}
            </FlipMove>

        </div>
    )
}

Results.propTypes = {
    selectedOption : PropTypes.string
}

Results.defaultProps = {
    selectedOption : "/trending/all/week?api_key=3da30279a3d8d1dbed1bde98ef8521ad&language=en-US"
}

export default Results
