import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

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

  it('renders correctly if an empty array is passed or if the listNotifications property is missing', () => {
    const notifications = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(notifications.find(<NotificationItem value='No new notification for now' />).exists()).toBe(true);
    const notificationsPropMissing = shallow(<Notifications displayDrawer={true} />);
    expect(notificationsPropMissing.find(<NotificationItem value='No new notification for now' />).exists()).toBe(true);
  });

  it('when a list of notifications is passed, the component renders it correctly and with the right number of NotificationItem', () => {
    const testNotifications = [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: getLatestNotification()}
    ]

    const notifications = shallow(<Notifications displayDrawer={true} listNotifications={testNotifications} />);
    expect(notifications.children()).toHaveLength(3);
  });

  it('when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is', () => {
    const notifications = shallow(<Notifications displayDrawer={true} />);
    expect(notifications.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(false);
    expect(notifications.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>)).toBe(true);
  });
});