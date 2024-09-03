import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

describe('BodySectionWithMarginBottom', () => {
    beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

    it('component render correctly a BodySection and the props are passed correctly to the child component', () => {
        const BSWMB = shallow(<BodySectionWithMarginBottom />);
		expect(BSWMB.find(BodySection).exists()).toBe(true);

        const BSWMB2 = shallow(<BodySectionWithMarginBottom title="test title"><p>test children node</p></BodySectionWithMarginBottom>)
		expect(BSWMB2.find(BodySection).props().title).toBe('test title');
		// p tag is child component in this instance
		expect(BSWMB2.find('p').text()).toBe('test children node');
    });
});