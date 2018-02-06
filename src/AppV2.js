import React, {Component} from 'react';
import './styles/App.css';
import Constructor from "./components/constructor/Constructor";
import Profile from './components/cabinet/Profile';
import Payment from './components/payment/Payment';
import {FirebaseAuth} from "react-firebaseui";
import * as firebase from "firebase";
import {connect} from 'react-redux';

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

        this.renderApp = this.renderApp.bind(this);
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
        tosUrl: "https://www.google.com",
    };
    renderApp(state = this.props.currentPage) {
        let targetPage;
        switch (state) {
            case 'RENDER_SIGN':
                targetPage = <FirebaseAuth uiConfig={this.signInUIConfig} firebaseAuth={firebase.auth(ConstructorApp)}/>;
                break;
            case 'RENDER_CONSTRUCTOR':
                targetPage = <Constructor/>;
                break;
            case 'RENDER_PROFILE':
                targetPage = <Profile/>;
                break;
            case 'RENDER_PAYMENT':
                targetPage = <Payment/>;
                break;
            default:
                targetPage = <Constructor/>;
        }
        return targetPage;
    }
    render() {
        // return this.state.signedIn ?
        //     (
        //         <div className="App">
        //             {this.renderApp()}
        //         </div>
        //     ) :
        //     (
        //         <FirebaseAuth uiConfig={this.signInUIConfig} firebaseAuth={firebase.auth(ConstructorApp)}/>
        //     );

        return <div className="App">{this.renderApp()}</div>;
    }
}

const mapStateToProps = (state) => {
    return ({
        currentPage: state.switchPage.filter
    })
};

export default connect(mapStateToProps)(App);
