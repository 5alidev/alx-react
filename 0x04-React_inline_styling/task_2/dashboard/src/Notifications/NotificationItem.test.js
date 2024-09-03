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

    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

    it('calls markAsRead with the right ID when clicked', () => {
        const markAsReadSpy = jest.fn(); // Create the spy function
        const id = 1; // Example ID
        const wrapper = shallow(
        <NotificationItem
            id={id}
            type="default"
            value="New course available"
            markAsRead={markAsReadSpy}
        />
        );

        // Simulate the click event on the NotificationItem component
        wrapper.find('li').simulate('click');

        // Check if the spy was called with the correct ID
        expect(markAsReadSpy).toHaveBeenCalledWith(id);

        // Optionally, check if console.log was called
        // expect(consoleLogSpy).toHaveBeenCalled();
    });
});