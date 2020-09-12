import React from 'react';

import './Course.css';

const Course = (props) => {

    // const courseStyle = {  };

    // console.log(props.enrollNowHandler);
    const { course_name, instructor, price, image } = props.course;

    const enrollNowHandler = props.enrollNowHandler; 
    // console.log(course_name,price,image);

    return (
        <div className="m-5 course-div">
            <div className="card" >
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">

                    <h5 className="card-title">{course_name}</h5>

                    <p className="card-text">Instructor : {instructor}</p>

                    <div className="card-footer d-flex justify-content-between">
                        <h5>Price : ${price}</h5>
                        <button className="btn btn-primary" onClick={enrollNowHandler}>Enroll Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Course;