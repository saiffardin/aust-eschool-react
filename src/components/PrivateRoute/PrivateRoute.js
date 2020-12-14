import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // if (loggedInUser.isSignedIn === false)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.isSignedIn || localStorage.getItem("user")
                    ? (children)
                    :  (  
                        <Redirect
                            to={{
                                pathname: "/logIn",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;