import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import LandingPage from './obsolete/LandingPage/LandingPage';
import LogIn from './obsolete/LogIn/LogIn';
import SignUp from './obsolete/SignUp/SignUp';
import AfterLogin from './components/AfterLogin/AfterLogin';
import BuyCourses from './components/BuyCourses/BuyCourses';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';
import OrderReview from './components/OrderReview/OrderReview';


export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});

    return (

        <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>


            <Router>

                <Switch>
                    <Route exact path="/">
                        <LandingPage></LandingPage>
                    </Route>

                    <Route path="/logIn">
                        <LogIn></LogIn>
                    </Route>

                    <Route path="/signUp">
                        <SignUp></SignUp>
                    </Route>

                    <Route path="/afterLogin">
                        <AfterLogin></AfterLogin>
                    </Route>

                    <Route path="/profile">
                        <Profile></Profile>
                    </Route>

                    <PrivateRoute path="/buyCourses">
                        <BuyCourses></BuyCourses>
                    </PrivateRoute>

                    <PrivateRoute path="/review">
                        <OrderReview></OrderReview>
                    </PrivateRoute>

                    <Route path="*">
                        <h1>Sorry !! Page Not Found.</h1>
                    </Route>

                </Switch>

            </Router>
        </UserContext.Provider>

    );
}

export default App;
