import React, {Component} from "react";
import {SideBar} from "./SideBar";
import {Main} from "./Main";
import {Help} from "./Help";
import {Publish} from "./Publish";

export class Constructor extends Component {
    /**
     * @param component Компонент, який ти хоч збілдити в конструктор
     */
    value(component) {
        this.setState({
            comp: component
        });
    }

    render() {
        alert(this.state.comp);
        alert(this.value);
        return (
            <section className="constructor">
                <SideBar value={this.value}/>
                <Main comp={this.state.comp}/>
                <Help/>
                <Publish/>
            </section>
        );
    }
}