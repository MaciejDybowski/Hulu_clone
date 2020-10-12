import React from 'react';
import { shallow } from 'enzyme';
import VideoCard from './Results';
import TextTruncate from 'react-text-truncate';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';



it('render without crash ' , () => {
    shallow(<VideoCard/>);
})



