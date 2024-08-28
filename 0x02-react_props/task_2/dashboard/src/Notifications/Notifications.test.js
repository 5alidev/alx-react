import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
    it('render without crashing', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.exists()).toBe(true);
    });

    it('renders the NotificationItem', () => {
		const notifications = shallow(<Notifications />);
		expect(notifications.find(NotificationItem).exists()).toBe(true);
	});

    it('renders correct text', () => {
		  const notifications = shallow(<Notifications />);
		  expect(notifications.find('p').text()).toEqual('Here is the list of notifications');
	});

  it('first NotificationItem element renders the right html', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('ul').childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
  });
});