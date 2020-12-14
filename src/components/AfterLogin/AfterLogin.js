import React, { useContext } from 'react';
import Header from '../Header/Header';
import './AfterLogin.css'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BuyCourses from '../BuyCourses/BuyCourses';
import { UserContext } from '../../App';

const AfterLogin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div >
            <h1>After Login Page</h1>
            <h1>{loggedInUser.email}</h1>
            <Header></Header>
        </div>

        
    );
};

export default AfterLogin;