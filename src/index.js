import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from "firebase";
import * as firebaseui from "firebaseui";

const config = {
    apiKey: "AIzaSyBH7e8MlyFtghJgDqPawkZlAJtxu_zHYvs",
    authDomain: "contructor-7553e.firebaseapp.com",
    databaseURL: "https://contructor-7553e.firebaseio.com",
    projectId: "contructor-7553e",
    storageBucket: "contructor-7553e.appspot.com",
    messagingSenderId: "971261132352"
},
    CLIENT_ID = "971261132352-4r2jsb42dhdb7i0rrrffg4j6nsvrcu4u.apps.googleusercontent.com";

firebase.initializeApp(config, "Constructor");
firebase.auth(firebase.app("Constructor")).useDeviceLanguage();

/**
 * @return {!Object} The FirebaseUI config.
 */

function handleSignInUser() {
    // Lol, kek, cheburek
}

function setSignInUI() {
    return {
        "callbacks": {
            "signInSuccess": function(user, credential) {
                handleSignInUser(user); // Тут треба подумати над алгоритмом обробки логіна/рега
                return false; // Но, раз нич
            }
        },
        "signInFlow": "popup",
        "signInOptions": [
            {
                "provider": firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                "authMethod": "https://accounts.google.com",
                "clientId": CLIENT_ID
            },
            {
                "provider": firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                "scopes": [
                    "public_profile",
                    "email"
                ]
            }
        ],
        "tosUrl": "https://pornhub.com",
        "credentialHelper": (CLIENT_ID && CLIENT_ID !== "971261132352-4r2jsb42dhdb7i0rrrffg4j6nsvrcu4u.apps.googleusercontent.com") ?
            firebaseui.auth.CredentialHelper.GOOGLE_YOLO :
            firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
    };
}

let signInUI = new firebaseui.auth.Auth(firebase.auth(firebase.app("Constructor")));
signInUI.disableAutoSignIn();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
