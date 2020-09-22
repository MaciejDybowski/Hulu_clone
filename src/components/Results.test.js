import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';
import FlipMove from 'react-flip-move'

it('render without crash ' , () => {
    shallow(<Results/>);
})

it('contains flip move ' , () => {
    const results = shallow(<Results />);
    expect(results.containsMatchingElement(<FlipMove />)).toEqual(true);
})
