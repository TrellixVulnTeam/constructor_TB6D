import React, {Component} from "react";
import {SideBar} from "./SideBar";
import Main from "./Main";
import {Help} from "./Help";
import {Publish} from "./Publish";

export class Constructor extends Component {

    render() {
        return (
            <section className="constructor">
                <SideBar/>
                <Main/>
                <Help/>
                <Publish/>
            </section>
        );
    }
}