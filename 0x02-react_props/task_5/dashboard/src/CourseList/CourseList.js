import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

const CourseList = ({listCourses=[]}) => {
    return (
        <table id='CourseList'>
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
                {listCourses.length <= 0 ?
                    (<CourseListRow isHeader={false} textFirstCell='No course available yet' />)
                    :
                    (listCourses.map(course => {
                        return <CourseListRow key={course.id} isHeader={false} textFirstCell={course.name} textSecondCell={course.credit} />
                    }))
                }
                {/* <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />
                <CourseListRow isHeader={false} textFirstCell="Webpack" textSecondCell="20" />
                <CourseListRow isHeader={false} textFirstCell="React" textSecondCell="40" /> */}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
};

export default CourseList;