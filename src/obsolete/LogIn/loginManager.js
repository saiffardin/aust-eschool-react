// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import "firebase/firestore";




export const initializeLoginFramework = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


export const handleGoogleLogin = (user) => {
    // console.log("google");
    let provider = new firebase.auth.GoogleAuthProvider();

    return firebaseAuth(provider, user);
}


export const handleFacebookLogin = (user) => {
    // console.log("facebook");

    let provider = new firebase.auth.FacebookAuthProvider();

    return firebaseAuth(provider, user);
}


export const signInWithEmailAndPassword = (user) => {

    let email = user.email;
    let password = user.password;

    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            console.log("successful");
            // console.log("uid: ",res.user.uid);

            const newUserInfo = { ...user };

            newUserInfo.uid = res.user.uid;
            newUserInfo.error = '';
            newUserInfo.success = true;
            newUserInfo.email = email;
            newUserInfo.isSignedIn = true;
            newUserInfo.courses = [];

            console.log(newUserInfo);
            return newUserInfo;
        })
        .catch((err) => {
            let errorCode = err.code;
            let errorMessage = err.message;

            console.log("Log In Failed. Look at the Errors");
            console.log("errorCode: ", errorCode);
            console.log("errorMessage: ", errorMessage);

            if (err.code === 'auth/user-not-found') {
                return -1;
            }

            if (err.code === 'auth/wrong-password') {
                return -2;
            }

            
        })
}


const firebaseAuth = (provider, user) => {

    const db = firebase.firestore();

    return firebase.auth().signInWithPopup(provider)
        .then((result) => {

            let token = result.credential.accessToken;

            let { displayName, email, photoURL } = result.user;

            console.log(displayName);
            console.log(email);
            console.log(photoURL);
            console.log("Successfully Logged In");

            const newUserInfo = { ...user };
            newUserInfo.uid = result.user.uid;
            
            newUserInfo.email = email;
            newUserInfo.isSignedIn = true;
            newUserInfo.courses = [];
            newUserInfo.displayName = displayName;
            newUserInfo.photoURL = photoURL;

            console.log(newUserInfo);


            db.collection('users').doc(newUserInfo.uid).set(newUserInfo, {merge: true})
            .then(()=>{
                console.log("update user table");
            })


            // history.replace(from);
            return (newUserInfo);

        })
        .catch(function (error) {
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


            if (errorCode==='auth/account-exists-with-different-credential'){
                alert('An account already exists with the same email address but different sign-in credentials.');
                return -1;
            }
        });

}





