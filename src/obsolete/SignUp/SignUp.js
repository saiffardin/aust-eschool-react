import React, { useState } from 'react';
import './sign_up.css';
import { Link } from 'react-router-dom';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

const SignUp = () => {

    const [user, setUser] = useState({
        // isSignedIn: false,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    });

    let isFirstNameValid = false;
    let isLastNameValid = false;
    let isEmailValid = false;
    let isPasswordValid = false;

    let firstName = '';
    let lastName = '';
    let email = '';
    let password = '';
    let passwordConfirm = '';



    const handleBlur = (e) => {

        if (e.target.name === 'firstName') {
            isFirstNameValid = /^[a-zA-Z ]{2,30}$/.test(e.target.value);
            console.log(e.target.value, isFirstNameValid);
            firstName = e.target.value;
        }


        if (e.target.name === 'lastName') {
            isLastNameValid = /^[a-zA-Z ]{2,30}$/.test(e.target.value);
            console.log(e.target.value, isLastNameValid);
            lastName = e.target.value;
        }

        if (e.target.name === 'email') {
            isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(e.target.value, isEmailValid);
            email = e.target.value;
        }

        if (e.target.name === 'password'
            && e.target.value.length > 5
            && /\d{1}/.test(e.target.value)) {


            password = e.target.value;
            console.log(e.target.value, /\d{1}/.test(e.target.value));
            console.log('password: ', password);


            if (password.trim() !== '' && password === passwordConfirm) {
                isPasswordValid = true;

            }

        }

        else {
            console.log("invalid password, handleBlur");
        }

        if (e.target.name === 'confirmPassword') {
            if (password.trim() !== '' && password === (e.target.value)) {

                isPasswordValid = true;
                console.log("password matched", isPasswordValid);

                passwordConfirm = password;
                console.log('passwordConfirm: ', passwordConfirm);

            }
            else {
                console.log("password didn't matched. handleBlur");
            }
        }

        if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid) {

            console.log("All OK. handleBlur");
        }
    }

    const signUpHandler = (e) => {
        e.preventDefault();

        if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid) {

            let newUser = {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
            };

            setUser(newUser);


            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log("successful");
                })
                .catch((err) => {
                    let errorCode = err.code;
                    let errorMessage = err.message;

                    console.log("Sign Up Failed. Look at the Errors");
                    console.log("errorCode: ", errorCode);
                    console.log("errorMessage: ", errorMessage);

                    if (errorCode==='auth/email-already-in-use'){
                        alert("Account already in use");
                    }

                })

            document.getElementById("signup-form").reset();

        }



        else {
            alert("Please put your information properly.");
        }


    }


    return (
        <div className="sign-up">
            <div className="container">
                <div className="pl-0 signUp-section py-3">

                    {/* top icon */}
                    <div className="signUp-icon text-center">
                        <img src={require("./images/cov2.png")} alt="sign in img" />
                    </div>

                    {/* signUp form */}
                    {/* onSubmit={signUpHandler} */}
                    <form onSubmit={signUpHandler} className="needs-validation p-2" id='signup-form'>
                        {/* row name */}
                        <div className="form-row px-5">

                            {/* First name */}
                            <div className="col-md-6 mb-2">
                                <label htmlFor="validationCustom01">First name</label>
                                <input name='firstName' onBlur={handleBlur} type="text" className="form-control" id="validationCustom01" required />
                            </div>

                            {/* Last name */}
                            <div className="col-md-6 mb-2">
                                <label htmlFor="validationCustom02">Last name</label>
                                <input name='lastName' onBlur={handleBlur} type="text" className="form-control" id="validationCustom02" required />
                            </div>
                        </div>


                        {/* row email */}
                        <div className="form-row px-5">
                            <div className="col-md-12 mb-2">
                                <label htmlFor="validationCustom03">Email ID</label>
                                <input name='email' onBlur={handleBlur} type="email" className="form-control" id="validationCustom03" required />
                            </div>
                        </div>


                        {/* row password */}
                        <div className="form-row px-5">

                            {/* password */}
                            <div className="col-md-6 mb-2">
                                <label htmlFor="validationCustom06_password">Password</label>
                                <input name='password' onBlur={handleBlur} type="password" className="form-control" id="validationCustom06_password" required />
                            </div>

                            {/* confirm password */}
                            <div className="col-md-6 mb-2">
                                <label htmlFor="validationCustom07_confirmPass">Confirm Password</label>
                                <input name='confirmPassword' onBlur={handleBlur} type="password" className="form-control" id="validationCustom07_confirmPass" required />
                            </div>
                        </div>

                        {/* Sign Up Button */}
                        <div className="text-center px-5">
                            <button className="btn sign-up-btn " type="submit">Sign Up</button>
                        </div>


                        {/* include LogIn */}
                        <div className="px-5 d-flex flex-row align-items-center justify-content-center mt-5">
                            <p>Already have an account?</p>

                            <Link to="/logIn">
                                <button className="btn logIn-btn ml-3">Log In</button>
                            </Link>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;