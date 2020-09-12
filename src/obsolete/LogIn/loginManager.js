// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import firebaseConfig from '../../firebase.config';


export const initializeLoginFramework = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


export const handleGoogleLogin = (user) => {
    // console.log("google");
    let provider = new firebase.auth.GoogleAuthProvider();

    return firebaseAuth(provider,user);
}


export const handleFacebookLogin = (user) => {
    // console.log("facebook");

    let provider = new firebase.auth.FacebookAuthProvider();

    return firebaseAuth(provider,user);
}


export const signInWithEmailAndPassword = (user) => {

    let email = user.email;
    let password = user.password;

    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log("successful");

            const newUserInfo = { ...user };
            newUserInfo.error = '';
            newUserInfo.success = true;

            console.log(newUserInfo);
            return newUserInfo;



        })
        .catch((err) => {
            let errorCode = err.code;
            let errorMessage = err.message;

            console.log("Log In Failed. Look at the Errors");
            console.log("errorCode: ", errorCode);
            console.log("errorMessage: ", errorMessage);

        })
}


const firebaseAuth = (provider,user) => {

    return firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            let token = result.credential.accessToken;
            


            let { displayName, email, photoURL } = result.user;

            console.log(displayName);
            console.log(email);
            console.log(photoURL);
            console.log("Successfully Logged In");


            const newUserInfo = { ...user };
            newUserInfo.error = '';
            newUserInfo.success = true;
            newUserInfo.email = email;
            newUserInfo.isSignedIn = true;

            console.log(newUserInfo);

            // history.replace(from);
            return (newUserInfo);


        }).catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;


            console.log("Log In Failed. Look at the Errors");
            console.log("errorCode: ", errorCode);
            console.log("errorMessage: ", errorMessage);
            console.log("Error Email: ", email);
            console.log("Error credential: ", credential);
        });

}