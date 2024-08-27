import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

describe('App', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });

    it('render a div with the class App-header', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.App-header')).toBeDefined();
	});

    it('render a div with the class App-body', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.App-body')).toBeDefined();
	});

    it('render a div with the class App-footer', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.App-footer')).toBeDefined();
	});
})