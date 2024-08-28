import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
    it('render without crashing', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.exists()).toBe(true);
    });

    it('renders three list items', () => {
		const notifications = shallow(<Notifications />);
		expect(notifications.find('li')).toHaveLength(3);
	});

    it('renders correct text', () => {
		const notifications = shallow(<Notifications />);
		expect(notifications.find('p').text()).toEqual('Here is the list of notifications');
	});
});