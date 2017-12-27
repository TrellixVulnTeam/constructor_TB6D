import React, {Component} from "react";

export class Section extends Component {
    constructor(props) {
        super(props);

        this.clickMe = this.clickMe.bind(this);
    }

    clickMe() {

    }

    render() {
        return (
            <section className="const-section" onClick={this.clickMe}>
                <h2>S!</h2>
            </section>
        );
    }
}