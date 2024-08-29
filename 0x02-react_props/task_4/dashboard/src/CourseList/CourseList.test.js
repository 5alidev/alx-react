import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe("CourseList", () => {
    it('renders without crashing', () => {
        const courseListCopy = shallow(<CourseList />);
        expect(courseListCopy.exists()).toBe(true);
    });

    it('renders the 5 different rows', () => {
        const courseListCopy = shallow(<CourseList />);
        expect(courseListCopy.find(CourseListRow)).toHaveLength(5);
    });
});