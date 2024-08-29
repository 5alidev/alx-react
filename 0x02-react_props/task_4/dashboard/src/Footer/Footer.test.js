import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
    it('renders without crashing', () => {
        const footer = shallow(<Footer/>);
        expect(footer.exists()).toBe(true);
    });

    it('renders the text Copyright', () => {
        const footer = shallow(<Footer/>);
        expect(footer.text()).toContain('Copyright');
    });
});