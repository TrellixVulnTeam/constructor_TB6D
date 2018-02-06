import React, {Component} from 'react';
import SideBar from '../SideBar';

class Profile extends Component {
    render() {
        return (
            <div className="profile main">
                <SideBar
                />
                <h1>This is profile page!</h1>
            </div>
        )
    }
}

export default Profile;