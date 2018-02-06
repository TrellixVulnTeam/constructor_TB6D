import React, {Component} from 'react';
import SideBar from '../SideBar';

class Payment extends Component {
    render() {
        return (
            <div className="payment main">
                <SideBar
                />
                <h1>This is paymentPage</h1>
            </div>
        )
    }
}

export default Payment;