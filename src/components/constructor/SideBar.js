import React, {Component} from "react";
import {Section} from "./main/Section";

export class SideBar extends Component {
    render() {
        return (
            <section className="const-sidebar">
                <button className="hamburger-btn">☺</button>
                <nav className="const-menu">
                    <a href="#">На головну</a>
                    <a href="#">Особистий кабінет</a>
                    <a href="#">Інформація про оплату</a>
                </nav>
                <nav className="sections">
                    <Section/>
                    <Section/>
                    <Section/>
                </nav>
                <section className="const-info">
                    <a className="info-mail" href="#">xxx.xxx@gmail.com</a>
                    <a className="info-telegram">Our telegram</a>
                    <h3 className="copyright">Developed by: Jonco Lab Web Development</h3>
                </section>
            </section>
        );
    }
}