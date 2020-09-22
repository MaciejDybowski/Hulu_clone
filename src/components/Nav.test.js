import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

it('render without crash ' , () => {
    shallow(<Nav/>);
})

