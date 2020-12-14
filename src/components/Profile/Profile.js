import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Profile.css';




// demo purpose
// import fakeData from '../../fakeData';
import Course from '../Course/Course';

const Profile = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    console.log(loggedInUser);


    // demo purpose
    // const [courses] = useState(fakeData.slice(0, 10));

    const enrollNowHandler = (course) => {
        console.log(course.course_name);

        // const newCart = [...cart, course];
        // setCart(newCart);

    };

    return (
        <div className="profile-div">
            <Header></Header>
            {/* <h1>This is User Profile</h1> */}

            <div className="d-flex">


                {/* courses user bought */}
                <div className='user-courses '>
                    {/* {
                        courses.map(course =>
                            <Course
                                course={course}
                                key={course.id}

                                enrollNowHandler={() => enrollNowHandler(course)}
                            >
                                <button className="btn btn-primary" onClick={enrollNowHandler}>View Course</button>
                            </Course>
                        )
                    } */}
                </div>


                {/* right side er user info */}
                <div className='user-info-container'>

                    {
                        loggedInUser.photoURL
                            ? <img src={loggedInUser.photoURL} alt="ProfilePicture" />
                            : <h1>No Image</h1>
                    }

                    {
                        loggedInUser.displayName
                            ? <h2>{loggedInUser.displayName}</h2>
                            : <h2>No User Name</h2>
                    }

                    <h3>{loggedInUser.email}</h3>

                </div>

            </div>
        </div>
    );
};

export default Profile;