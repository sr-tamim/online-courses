// import all necessary resources
import React from 'react';
import Course from '../Course/Course';
import './Courses.css';

const Courses = (props) => {
    return (
        <div style={{ margin: '20px' }}>
            <h2>Courses</h2>
            {/* show all available courses */}
            <div id="courses">
                {
                    props.allCourses.map(course => <Course key={course.key} course={course} addToCart={props.addToCart} />)
                }
            </div>
        </div>
    );

};

export default Courses;