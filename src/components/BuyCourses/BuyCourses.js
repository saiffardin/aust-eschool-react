import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './BuyCourses.css'

import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';




// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../firebase.config';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}



const BuyCourses = () => {

    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);

    const db = firebase.firestore();

    let FetchCourses = [];


    useEffect(() => {

        db.collection('allCourses').get()
            .then(allDocs => {
                allDocs.forEach(eachDoc => {
                    FetchCourses.push(eachDoc.data());
                })
            })
            .then(() => {
                console.log("course length: ", FetchCourses.length);

                shuffle(FetchCourses);
                setCourses(FetchCourses);

            })

    }, []);

    const shuffle = a => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }


    
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
                            // enrollNowHandler={() => enrollNowHandler(course)}
                            >
                                <button className="btn btn-primary" onClick={() => enrollNowHandler(course)}>Enroll Now</button>
                            </Course>
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