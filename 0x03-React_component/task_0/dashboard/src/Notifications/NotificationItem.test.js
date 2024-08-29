import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
    it('renders without crashing', () => {
        const notificationItem = shallow(<NotificationItem/>);
        expect(notificationItem.exists()).toBe(true);
    });

    it('renders the correct html usins props for example: type=default and value=test', () => {
        const notificationItem = shallow(<NotificationItem/>);
        notificationItem.setProps({ type: "default", value: "test" });
        expect(notificationItem.html()).toEqual('<li data-notification-type="default">test</li>');
    });

    it('renders the correct html using props (for example: html={{ __html: "<u>test</u>" }}', () => {
        const notificationItem = shallow(<NotificationItem/>);
        notificationItem.setProps({ html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } });
        expect(notificationItem.html()).toEqual('<li data-priority="urgent"><strong>Urgent requirement</strong> - complete by EOD</li>');
    });
});