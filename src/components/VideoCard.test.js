import React from 'react';
import { shallow } from 'enzyme';
import VideoCard from './Results';
import TextTruncate from 'react-text-truncate';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const movie = {
    "id": 337401,
    "video": false,
    "vote_count": 1845,
    "vote_average": 7.5,
    "title": "Mulan",
    "release_date": "2020-09-10",
    "original_language": "en",
    "original_title": "Mulan",
    "genre_ids": [
        28,
        12,
        18,
        14,
        10752
    ],
    "backdrop_path": "/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
    "adult": false,
    "overview": "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
    "poster_path": "/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
    "popularity": 1966.036,
    "media_type": "movie"
}

it('render without crash ' , () => {
    shallow(<VideoCard/>);
})



