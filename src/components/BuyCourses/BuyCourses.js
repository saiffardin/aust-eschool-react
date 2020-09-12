import React, { useState } from 'react';
import Header from '../Header/Header';
import './BuyCourses.css'

import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';

const BuyCourses = () => {

    const [courses] = useState(fakeData.slice(0, 10));

    const [cart, setCart] = useState([]);

    // console.log(courses);

    const enrollNowHandler = (course) => {
        console.log(course.course_name);

        const newCart = [...cart, course];
        setCart(newCart);

    };


    return (
        <div className="buy-course-div">

            <Header></Header>

            <div className="d-flex">
                {/* 10 courses */}
                <div className='course-container'>
                    {
                        courses.map(course =>
                            <Course
                                course={course}
                                key={course.id}

                                enrollNowHandler={() => enrollNowHandler(course)}
                            ></Course>
                        )
                    }
                </div>

                {/* cart */}
                <div className='cart-container'>

                    <Cart
                        cart={cart}
                    ></Cart>

                </div>

            </div >





        </div>


    );
};

export default BuyCourses;