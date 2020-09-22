import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';

it('renders without crashing', () => {
    shallow(<App />);
});

it('check the App component includes Header, Nav, Results component', () =>{
    const app = shallow(<App/>);
    expect(app.containsMatchingElement(<Header/>)).toEqual(true);
    expect(app.containsMatchingElement(<Nav/>)).toEqual(true);
    expect(app.containsMatchingElement(<Results/>)).toEqual(true);
})