import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './LandingPage.css';

const LandingPage = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if (loggedInUser.isSignedIn) setLoggedInUser({});

    return (
        <div className='landingPage'>

            {/* NAVBAR and CAROUSEL */}
            <header>

                {/* NAVBAR */}
                <div className="container">

                    <nav className="navbar navbar-expand-lg navbar-light d-flex">
                        {/* <a className="navbar-brand" href="#"><img src={require("./images/ICON/Logo.png")} alt="Logo" /></a> */}
                        <Link to="/">
                            <img src={require("./images/ICON/Logo.png")} alt="Logo" />
                        </Link>


                        {/* Hamburger Menu*/}
                        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>


                        {/* NAVBAR ITEMS */}
                        <div className="text-center collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav ">

                                {/* 1 Books */}
                                <li className="nav-item active">
                                    <a className="nav-link" href="#BOOKS">Books<span className="sr-only">(current)</span></a>
                                </li>

                                {/* 2 Courses */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#COURSES">Courses</a>
                                </li>

                                {/* 3 Others */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#TESTIMONIAL">Others</a>
                                </li>



                                {/* 4 Button */}
                                <li className="nav-item">
                                    <Link to="/logIn">
                                        <button className="btn-signIn">Sign In</button>
                                    </Link>

                                    {/* <a href="../LogIn/log_in.html">
                                        <button className="btn-signIn">Sign In</button>
                                    </a> */}
                                </li>

                            </ul>
                        </div>
                    </nav>

                </div>


                {/* CAROUSEL */}
                <div className="container">

                    <div className="row">

                        {/* Left side : text */}
                        <div className="col-md-5 header-text">
                            <h6>Are you ready to Learn?</h6>
                            <h1>Learn With fun on <span>any schedule</span></h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius blandit facilisis quam netus.
                            </p>

                            <Link to="/signUp">
                                <button className="btn-getStarted-buyCourse">Get Started</button>
                            </Link>
                        </div>

                        {/* right side : img */}
                        <div className="col-md-7">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={require("./images/Illustration.png")} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require("./images/cov1.png")} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require("./images/cov3.png")} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require("./images/cov2.png")} className="d-block w-100" alt="..." />
                                    </div>
                                </div>

                                {/* control */}
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>

                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>



            {/* Books */}
            <div className="container" id="BOOKS">
                <div className="row">

                    {/* img 1 */}
                    <div className="col-lg-3 ">
                        <div className="books d-flex flex-column align-items-center justify-content-center p-3">
                            {/* img */}
                            <div id="book-img-1" className="row d-flex justify-content-center">
                                <img src={require("./images/ICON/book.png")} alt="book" />
                            </div>
                            {/* text */}
                            <div className="row d-flex flex-column">
                                <h3 className="text-center">1500+ Topic</h3>
                                <h6 className="text-center">Learn Anything</h6>
                            </div>
                        </div>
                    </div>


                    {/* img 2 */}
                    <div className="col-lg-3">
                        <div className="books d-flex flex-column align-items-center justify-content-center">
                            {/* img */}
                            <div className="row d-flex justify-content-center">
                                <img src={require("./images/ICON/Student.png")} alt="book" />
                            </div>
                            {/* text */}
                            <div className="row d-flex flex-column justify-content-center">
                                <h3 className="text-center">1800+ Students</h3>
                                <h6 className="text-center">Learn Anything</h6>
                            </div>
                        </div>
                    </div>


                    {/* img 3 */}
                    <div className="col-lg-3">
                        <div className="books d-flex flex-column align-items-center justify-content-center">
                            {/* img */}
                            <div className="row d-flex justify-content-center">
                                <img src={require("./images/ICON/Test.png")} alt="book" />
                            </div>
                            {/* text */}
                            <div className="row d-flex flex-column">
                                <h3 className="text-center">9K+ Test Token</h3>
                                <h6 className="text-center">Learn Anything</h6>
                            </div>
                        </div>
                    </div>


                    {/* img 4 */}
                    <div className="col-lg-3 ">
                        <div className="books d-flex flex-column align-items-center justify-content-center">
                            {/* img */}
                            <div className="row d-flex justify-content-center">
                                <img src={require("./images/ICON/Students.png")} alt="book" />
                            </div>
                            {/* text */}
                            <div className="row d-flex flex-column">
                                <h3 className="text-center">2000+ Student</h3>
                                <h6 className="text-center">Learn Anything</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Online Courses */}
            <div className="online-courses" id="COURSES">
                <h2 className="text-center">Online Courses</h2>

                <div className="container">
                    <div className="row ">

                        <div className="col-lg-4 p-2 d-flex justify-content-center">

                            {/* 1 */}
                            <div className="card ">

                                <img src={require("./images/1.png")} className="card-img-top" alt="..." />
                                <div className="card-body px-0">
                                    <h5 className="card-title mb-0">Discrete Math</h5>
                                    <p className="card-text">Designation</p>
                                    {/* <a href="../LogIn/log_in.html">
                                        <button className="btn-getStarted-buyCourse">Buy Course</button>
                                    </a> */}
                                    <Link to="/buyCourses">
                                        <button className="btn-getStarted-buyCourse">Buy Course</button>
                                    </Link>
                                </div>


                                <div className="card-footer d-flex justify-content-between">
                                    {/* left side */}
                                    <div className="dates">
                                        <div className="d-flex flex-row">
                                            <img src={require("./images/ICON/calendar.png")} alt="calendar" />
                                            <h6>Start 20 April, 2021</h6>
                                        </div>
                                    </div>

                                    {/* right side */}
                                    <div className="seats">
                                        <div className="d-flex flex-row ">
                                            <img src={require("./images/ICON/people.png")} alt="calendar" />
                                            <h6>60 Seats</h6>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>


                        <div className="col-lg-4 p-2 d-flex justify-content-center">
                            {/* 2 */}
                            <div className="card">

                                <img src={require("./images/2.png")} className="card-img-top" alt="..." />

                                <div className="card-body px-0">
                                    <h5 className="card-title mb-0">Modern Psychology</h5>
                                    <p className="card-text">Designation</p>

                                    <Link to="/buyCourses">
                                        <button className="btn-getStarted-buyCourse">Buy Course</button>
                                    </Link>
                                </div>

                                <div className="card-footer d-flex justify-content-between">
                                    {/* left side */}
                                    <div className="dates">
                                        <div className="d-flex flex-row">
                                            <img src={require("./images/ICON/calendar.png")} alt="calendar" />
                                            <h6>Start 20 April, 2021</h6>
                                        </div>
                                    </div>

                                    {/* right side */}
                                    <div className="seats">
                                        <div className="d-flex flex-row ">
                                            <img src={require("./images/ICON/people.png")} alt="calendar" />
                                            <h6>60 Seats</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className="col-lg-4 p-2 d-flex justify-content-center">
                            {/* 3 */}
                            <div className="card">

                                <img src={require("./images/3.png")} className="card-img-top" alt="..." />
                                <div className="card-body px-0">
                                    <h5 className="card-title mb-0">Data Structures</h5>
                                    <p className="card-text">Designation</p>

                                    <Link to="/buyCourses">
                                        <button className="btn-getStarted-buyCourse">Buy Course</button>
                                    </Link>
                                </div>

                                <div className="card-footer d-flex justify-content-between">

                                    {/* left side */}
                                    <div className="dates">
                                        <div className="d-flex flex-row">
                                            <img src={require("./images/ICON/calendar.png")} alt="calendar" />
                                            <h6>Start 20 April, 2021</h6>
                                        </div>
                                    </div>

                                    {/* right side */}
                                    <div className="seats">
                                        <div className="d-flex flex-row ">
                                            <img src={require("./images/ICON/people.png")} alt="calendar" />
                                            <h6>60 Seats</h6>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>



            {/* Testimonial */}
            <div className="testimonial mb-0 pb-0" id="TESTIMONIAL">
                <h2 className="text-center">Testimonial</h2>

                <div className="d-flex flex-row container justify-content-center">
                    <div>
                        <img src={require("./images/Man.png")} alt="man" />
                    </div>

                    <p className="testimonial-para">
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour,
                        or randomised words which don't look even slightly believable.
                        </p>
                </div>

            </div>


            {/* Footer */}
            <footer>
                <div className="row d-flex justify-content-center">

                    {/* col 1 */}
                    <div className="col-md-4">
                        <p >
                            Millions of people of all ages and from around
                            the world are improving their lives with us
                            </p>
                    </div>


                    {/* col 2 */}
                    <div className="col-md-2 pl-5">
                        <h4>Courses</h4>
                        <ul>
                            <li>Graphic Design</li>
                            <li>Web Design</li>
                            <li>Business</li>
                            <li>Marketing</li>
                            <li>Engineering</li>
                        </ul>
                    </div>


                    {/* col 3 */}
                    <div className="col-md-2  pl-5">
                        <h4>Terms</h4>
                        <ul>
                            <li>Graphic Design</li>
                            <li>Web Design</li>
                            <li>Business</li>
                            <li>Marketing</li>
                            <li>Engineering</li>
                        </ul>
                    </div>


                    {/* col 4 */}
                    <div className="col-md-2  pl-5">
                        <h4>Useful Link</h4>
                        <ul>
                            <li>Graphic Design</li>
                            <li>Web Design</li>
                            <li>Business</li>
                            <li>Marketing</li>
                            <li>Engineering</li>
                        </ul>
                    </div>

                </div>

                <p id="copyright" className="text-center ">Copyright © 2020 E-School.com</p>
            </footer>
        </div>

    );
};

export default LandingPage;