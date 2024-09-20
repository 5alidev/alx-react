import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
    it('renders without crashing', () => {
        const courseListRowCopy = shallow(<CourseListRow textFirstCell='test' />);
        expect(courseListRowCopy.exists()).toBe(true);
    });

    it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
        const courseListRowCopy = shallow(<CourseListRow isHeader={true} textFirstCell='test' />);
        const thElement = courseListRowCopy.find('th');
        expect(thElement).toHaveLength(1);
        expect(thElement.prop('colSpan')).toEqual('2');
    });

    it('renders two cells when textSecondCell is present', () => {
        const courseListRowCopy = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell='test' />);
        expect(courseListRowCopy.find('th')).toHaveLength(2);
    });

    it('renders correctly two td elements within a tr element', () => {
        const courseListRowCopy = shallow(<CourseListRow isHeader={false} textFirstCell='test' textSecondCell='test' />);
        expect(courseListRowCopy.find("tr").children()).toHaveLength(2);
        expect(courseListRowCopy.find("tr").childAt(0).html()).toEqual("<td>test</td>");
        expect(courseListRowCopy.find("tr").childAt(1).html()).toEqual("<td>test</td>");
    });
});