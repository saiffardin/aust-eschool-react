import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import firebaseConfig from '../../firebase.config';


import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const logOutHandler = () => {

        firebase.auth().signOut()
            .then(() => {

                const newUserInfo = { ...loggedInUser };
                newUserInfo.error = '';
                newUserInfo.success = false;
                newUserInfo.email = "";
                newUserInfo.isSignedIn = false;

                setLoggedInUser(newUserInfo);

                console.log("Logged Out Successfully");

            })
            .catch(function (error) {
                // An error happened.
                console.log("An error happened while Logging Out");
            });

    }

    return (
        <div className='my-header'>
            {/* NAVBAR */}
            <div className="">

                <nav className="navbar navbar-expand-lg navbar-light d-flex">
                    {/* <a className="navbar-brand" href="#"><img src={require("./images/ICON/Logo.png")} alt="Logo" /></a> */}

                    <img className="ml-5" src={require("./images/ICON/Logo.png")} alt="Logo" />



                    {/* Hamburger Menu*/}
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>


                    {/* NAVBAR ITEMS */}
                    <div className="text-center collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ">

                            {/* 1 Profile */}
                            <li className="nav-item active">
                                {/* <a className="nav-link" href="#BOOKS">Profile<span className="sr-only">(current)</span></a> */}
                                <Link className="nav-link" to='/profile'>Profile</Link>
                            </li>

                            {/* 2 Buy Courses */}
                            <li className="nav-item">
                                {/* <a  href="#COURSES"></a> */}
                                <Link className="nav-link" to='/buyCourses'>Buy Courses</Link>
                            </li>

                            {/* 3 Order Review */}
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#TESTIMONIAL"></a> */}
                                <Link className="nav-link" to='/review'>Order Review</Link>
                            </li>



                            {/* 4 Button */}
                            <li className="nav-item">
                                <button onClick={logOutHandler} className="btn-signIn">Log Out</button>
                            </li>

                        </ul>
                    </div>
                </nav>

            </div>
        </div>
    );
};

export default Header;