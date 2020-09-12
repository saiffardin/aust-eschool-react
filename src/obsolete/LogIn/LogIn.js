import React, { useContext, useState } from 'react';
import './log_in.css';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { UserContext } from '../../App';
import { initializeLoginFramework, handleGoogleLogin, signInWithEmailAndPassword, handleFacebookLogin } from './loginManager';



const LogIn = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        email: '',
        password: '',
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/profile" } };

    initializeLoginFramework();

    const handleBlur = (e) => {

        let isEmailValid = false;
        let isPasswordValid = false;
        let ifFieldValid = false;

        if (e.target.name === 'email') {
            isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            ifFieldValid = isEmailValid;
            // console.log(isEmailValid);
        }

        if (e.target.name === 'password') {

            if (e.target.value.length > 2) {
                isPasswordValid = /\d{1}/.test(e.target.value);
                ifFieldValid = isPasswordValid;
            }
        }

        if (ifFieldValid) {
            let newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser);

            console.log(e.target.value);
        }
    }

    const logInHandler = (e) => {
        e.preventDefault();

        if (user.email && user.password) {
            console.log("sent to database");
            document.getElementById("login-form").reset();

            // const email = user.email;
            // const password = user.password;

            signInWithEmailAndPassword(user)
                .then(res => {
                    setUser(res);
                    setLoggedInUser(res);

                    history.replace(from);

                })


        }
        else {
            alert("Please put your email and password properly");
        }

        // input['email'] = '';


    }

    const googleLogin = () => {
        handleGoogleLogin(user)
            .then(res => {
                setUser(res);
                setLoggedInUser(res);

                history.replace(from);
            })
            .catch (err => {
                console.log("facebook kahini kortese");
            })
    }


    const facebookLogin = () => {
        handleFacebookLogin(user)
            .then(res => {
                setUser(res);
                setLoggedInUser(res);

                history.replace(from);
            })
    }


    return (
        <div className='LogIn'>
            <div className="container">
                <div className="top-part d-flex justify-content-center align-items-center flex-column">
                    <img src={require("./images/cov3.png")} alt="log in" />
                </div>

                <div className="user-login m-5">
                    <h1 className="text-center">LOGIN</h1>

                    <form onSubmit={logInHandler} className="needs-validation d-flex justify-content-center align-items-center flex-column" id='login-form'>

                        {/* row email */}
                        <div className="form-row mt-3">
                            <input onBlur={handleBlur} type="email" className="form-control my-input" name="email" placeholder="Email" id="validationCustom03" required />
                        </div>

                        {/* row password */}
                        <div className="form-row my-3">
                            {/* password */}
                            <input onBlur={handleBlur} type="password" className="form-control my-input" name="password" placeholder="Password" id="validationCustom06_password" required />
                        </div>



                        {/* Log In Button */}
                        <div className="text-center px-5 mt-3 mb-2">
                            {/* <button ></button> */}
                            <input className="btn logIn-btn " type="submit" value="Log In" />
                        </div>

                        {/* OR */}
                        <h2 style={{ color: '#0f6b40', margin: '30px 10px 0px 10px' }}>Or</h2>

                        {/* Log in with Google Facebook */}
                        <div className="px-5 d-flex flex-row align-items-center justify-content-center mt-4 mb-2">

                            <p style={{ marginRight: '10px' }} >You Can Log In With</p>

                            <p>
                                {/* Google */}
                                <img className="third-party" onClick={googleLogin} style={{ width: '60px', cursor: 'pointer', margin: '0 5px' }} src={require("./images/google.png")} alt="" />


                                {/* Facebook */}

                                <img className="third-party" onClick={facebookLogin} style={{ width: '80px', cursor: 'pointer', margin: '0 0' }} src={require("./images/fb.png")} alt="" />
                            </p>
                        </div>




                        {/* create account */}
                        <div className=" px-5 d-flex flex-row align-items-center justify-content-center mt-5">
                            <p>Do not have any account?</p>
                            {/* <a href="../SignUp/sign_up.html" className="btn logIn-btn ml-3">Create Account</a> */}

                            <Link to='/signUp'>
                                <button className="btn logIn-btn ml-3">Create Account</button>
                            </Link>
                        </div>



                        <Link to='/afterLogin'>
                            <button className="btn logIn-btn m-5">Go To After Login Page</button>
                        </Link>
                    </form>
                </div>
            </div>




        </div>

    );
};

export default LogIn;