import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Login', () => {
    beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

    it('renders without crashing', () => {
        const login = shallow(<Login/>);
        expect(login.exists()).toBe(true);
    });

    it('renders two input tags', () => {
        const login = shallow(<Login/>);
        expect(login.find('input').length).toBe(2);
    });

    it('render two label tags', () => {
        const login = shallow(<Login/>);
        expect(login.find('label').length).toBe(2);
    });
});