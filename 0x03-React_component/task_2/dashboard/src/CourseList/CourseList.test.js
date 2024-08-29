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

    it('CourseList renders correctly if you pass an empty array or if you don’t pass the listCourses property', () => {
        const courseListCopy = shallow(<CourseList listCourses={[]} />);
        expect(courseListCopy.find(<CourseListRow isHeader={false} textFirstCell='No course available yet' />).exists()).toBe(true);
        
        const noCoursesList = shallow(<CourseList />);
        expect(noCoursesList.find(<CourseListRow isHeader={false} textFirstCell='No course available yet' />).exists()).toBe(true);
    });

    it('when a list of courses is passed, the component renders it correctly', () => {
        const listCourses = [
            {id: 1, name: 'ES6', credit: 60},
            {id: 2, name: 'Webpack', credit: 20},
            {id: 3, name: 'React', credit: 40}
        ];

        const courseListCopy = shallow(<CourseList listCourses={listCourses} />);
        expect(courseListCopy.find("tbody").children()).toHaveLength(3);
    });
});