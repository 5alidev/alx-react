import React from 'react';
import { shallow } from 'enzyme';
import Header from "./Header";
import { StyleSheetTestUtils } from 'aphrodite';

describe('Header', () => {
    beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

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