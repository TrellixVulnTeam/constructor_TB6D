import React, {Component} from 'react';
import './styles/App.css';
import {Constructor} from "./components/constructor/Constructor";
import {FirebaseAuth} from "react-firebaseui";
import * as firebase from "firebase";

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

const ConstructorApp = firebase.app("Constructor");

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: false
        };
    }
    /**
     * @param user firebase.User object
     */
    handleSignInUser(user) {
        // Lol, kek, cheburek
    }
    signInUIConfig = {
        callbacks: {
            signInSuccess: (currentApp = this, user, credentials) => {
                this.setState({
                    signedIn: true
                });
                currentApp.handleSignInUser(user);
                return false;
            }
        },
        signInFlow: "popup",
        signInOptions: [
            {
                provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                authMethod: "https://accounts.google.com",
                clientId: CLIENT_ID
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
        tosUrl: "https://pornhub.com",
    };
    render() {
        return this.state.signedIn ?
            (
                <div className="App">
                    <Constructor/>
                </div>
            ) :
            (
                <FirebaseAuth uiConfig={this.signInUIConfig} firebaseAuth={firebase.auth(ConstructorApp)}/>
            );
    }
}

export default App;
