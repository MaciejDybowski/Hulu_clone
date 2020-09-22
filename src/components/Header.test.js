import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';



it('components Header include materialUI icon', () => {
    const header = shallow(<Header/>);
    expect(header.containsMatchingElement(<HomeIcon />)).toEqual(true);
    expect(header.containsMatchingElement(<FlashOnIcon />)).toEqual(true);
    expect(header.containsMatchingElement(<LiveTvIcon />)).toEqual(true);
    expect(header.containsMatchingElement(<VideoLibraryIcon />)).toEqual(true);
    expect(header.containsMatchingElement(<PersonOutlineIcon />)).toEqual(true);
    expect(header.containsMatchingElement(<SearchIcon />)).toEqual(true);
})

it('component include hulu logo' , () => {
    const header = shallow(<Header />);
    expect(header.containsMatchingElement( <img src='http://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png' alt='hulu logo'></img>)).toEqual(true);
})

