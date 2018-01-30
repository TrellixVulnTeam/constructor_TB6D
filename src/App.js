import React, {Component} from 'react';
import './styles/App.css';
import {Constructor} from "./components/constructor/Constructor";
import {FirebaseAuth} from "react-firebaseui";
import * as firebase from "firebase";
import {Provider} from 'react-redux';
import store from './store/store';

const config = {
    apiKey: "AIzaSyBH7e8MlyFtghJgDqPawkZlAJtxu_zHYvs",
    authDomain: "contructor-7553e.firebaseapp.com",
    databaseURL: "https://contructor-7553e.firebaseio.com",
    projectId: "contructor-7553e",
    storageBucket: "contructor-7553e.appspot.com",
    messagingSenderId: "971261132352"
};
firebase.initializeApp(config, "Constructor");

const ConstructorApp = firebase.app("Constructor");
firebase
    .auth(ConstructorApp)
    .useDeviceLanguage();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: false
        };
    }
    handleSignInUser(user) {
        let currentUser = user,
            sep = "\r\n";
        this.setState({
            signedIn: true
        });
        alert(
            "Some news about current user:" + sep +
            "displayName: " + currentUser.displayName + sep +
            "email: " + currentUser.email + sep +
            "emailVerified: " + currentUser.emailVerified + sep +
            "isAnonymous: " + currentUser.isAnonymous + sep +
            "metadata: " + currentUser.metadata + sep +
            "phoneNumber: " + currentUser.phoneNumber + sep +
            "photoUrl: " + currentUser.photoURL + sep +
            "providerId: " + currentUser.providerId + sep +
            "providerData: " + currentUser.providerData + sep +
            "refreshToken: " + currentUser.refreshToken + sep +
            "uid: " + currentUser.uid
        );
    }
    handleAuthUIRender() {
        /*
                Hide preLoader here!
                 */
    }
    handleSuccessfulSignIn(user, credentials) {
        if (credentials) {
            switch (credentials.providerId) {
                case "google.com":
                    alert("G!");
                    break;
                case "facebook.com":
                    alert("FB!");
                    break;
                case "github.com":
                    alert("GH!");
                    break;
                case "twitter.com":
                    alert("TW!");
                    break;
                default:
                    alert("Unknown provider!");
            }
        } else {
            alert("Password provider!");
        }
        this.handleSignInUser(user);
        return false;
    }
    signInUIConfig = {
        callbacks: {
            uiShown: this.handleAuthUIRender,
            signInSuccess: (user, credentials) => {
                this.handleSuccessfulSignIn(user, credentials);
            }
        },
        signInFlow: "popup",
        signInOptions: [
            {
                provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                authMethod: "https://accounts.google.com",
                clientId: "971261132352-4r2jsb42dhdb7i0rrrffg4j6nsvrcu4u.apps.googleusercontent.com"
            },
            {
                provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                scopes: [
                    "public_profile",
                    "email"
                ]
            },
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                requireDisplayName: true
            }
        ],
        credentialHelper: null,
        tosUrl: "https://www.google.com",
    };
    render() {
        return this.state.signedIn ?
            (
                <Provider store={store}>
                    <div className="App">
                        <Constructor/>
                    </div>
                </Provider>
            ) :
            (
                <FirebaseAuth uiConfig={this.signInUIConfig} firebaseAuth={firebase.auth(ConstructorApp)}/>
            );
    }
}

export default App;
