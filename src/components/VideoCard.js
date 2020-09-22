import React, { forwardRef } from 'react'
import TextTruncate from 'react-text-truncate';
import './VideoCard.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PropTypes from 'prop-types'

const base_url = "https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie }, ref) => {

    return (
        <div ref={ref} className='videoCard'>
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster"></img>
            <TextTruncate
                line={1}
                element="p"
                truncateText="..."
                text={movie.overview}
            />

            <h2>{movie.title || movie.original_title}</h2>
            <p className='videoCard__stats'>
                {movie.release_date || movie.first_air_date}
                <ThumbUpIcon /> {movie.vote_count}</p>
        </div>
    )
}
)

VideoCard.propTypes ={
    movie : PropTypes.shape({
        backdrop_path: PropTypes.string,
        poster_path: PropTypes.string,
        overview : PropTypes.string,
        title : PropTypes.string,
        original_title : PropTypes.string,
        vote_count : PropTypes.number,
        release_date : PropTypes.string,
        first_air_date : PropTypes.string

    })
}

VideoCard.defaultProps = {
    movie : {
        backdrop_path: "/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        poster_path: "/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        overview : "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
        "poster_path": "/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        title : "Mulan",
        original_title : "Mulan",
        vote_count :1845,
        release_date : "2020-09-10",
        first_air_date : "2020-09-10",
    }
}

export default VideoCard
