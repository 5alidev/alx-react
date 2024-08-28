import React from 'react';
import { shallow } from 'enzyme';
import Header from "./Header";

describe('Header', () => {
    it('renders without crashing', () => {
        const header = shallow(<Header/>);
        expect(header.exists()).toBe(true);
    });

    it('renders an img tag', () => {
        const header = shallow(<Header/>);
        expect(header.find('img').length).toBe(1);
    });

    it('renders an h1 tag', () => {
        const header = shallow(<Header/>);
        expect(header.find('h1').length).toBe(1);
    });
})