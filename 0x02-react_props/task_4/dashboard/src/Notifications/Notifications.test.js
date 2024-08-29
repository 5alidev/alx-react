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

  it('menu item is being displayed when displayDrawer is false', () => {
    const notifications = shallow(<Notifications displayDrawer={false}/>);
    expect(notifications.find('div.menuItem').exists()).toBe(true);
  });

  it('div.Notifications is not being displayed when displayDrawer is false', () => {
    const notifications = shallow(<Notifications displayDrawer={false}/>);
    expect(notifications.find('div.Notifications').exists()).toBe(false);
  });

  it('menu item is being displayed when displayDrawer is true', () => {
    const notifications = shallow(<Notifications displayDrawer={true}/>);
    expect(notifications.find('div.menuItem').exists()).toBe(true);
  });

  it('div.Notifications is being displayed when displayDrawer is true', () => {
    const notifications = shallow(<Notifications displayDrawer={true}/>);
    expect(notifications.find('div.Notifications').exists()).toBe(true);
  });
});