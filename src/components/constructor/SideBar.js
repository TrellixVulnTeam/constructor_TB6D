import React, {Component} from "react";
import classSet from 'react-classset';
import Section from "./main/Section";

export class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sideBarWidth: 17,
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    // Event for closing and opening SideBar
    clickHandler() {
        this.setState({
            sideBarWidth: this.state.sideBarWidth === 17 ? 4 : 17
        });
    }

    render() {
        // Add second class to section
        const sideBarClass = classSet({
            'const-sidebar': true,
            'active': this.state.sideBarWidth === 4
        });

        return (
            <section className={sideBarClass} style={{width: parseInt(this.state.sideBarWidth) + '%'}}>
                <nav className="const-menu">
                    <button className="hamburger-btn" onClick={this.clickHandler}>☺</button>
                    <a href="#">☻ <span>Головна</span></a>
                    <a href="#">♥ <span>Кабінет</span></a>
                    <a href="#">♦ <span>Оплата</span></a>
                </nav>
                <Section/>
                <section className="const-info">
                    <a className="info-mail" href="#">♣ <span>xxx.xxx@gmail.com</span></a>
                    <a className="info-telegram">♠ <span>Our telegram</span></a>
                    <a className="copyright">© <span>Developed by: Jonco Lab</span></a>
                </section>
            </section>
        );
    }
}