import React, {Component} from "react";
import SideBar from "../SideBar";
import Main from "./Main";
import {Help} from "./Help";
import {Publish} from "./Publish";

class Constructor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sectionsArr: [],
            idKey: 1
        };

        this.addSection = this.addSection.bind(this);
    }

    addSection(component) {
        this.setState({
            sectionArr: component
        })
    }

    render() {
        return (
            <section className="constructor main">
                <SideBar
                    sectionsArr={this.state.sectionsArr}
                    addSection={this.addSection}
                />
                <Main
                    sections={this.state.sections}
                />
                <Help/>
                <Publish/>
            </section>
        );
    }
}

export default Constructor