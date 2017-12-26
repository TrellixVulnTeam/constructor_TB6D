import React, {Component} from "react";
import {Section} from "./main/Section";

export class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sideBarWidth: 17,
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    sideBarContent = [
        'На головну',
        'Особистий кабінет',
        'Інформація про оплату',
        'xxx.xxx@gmail.com',
        'Our telegram',
        'Developed by: Jonco Lab Web Development'
    ];

    clickHandler() {
        this.setState({
            sideBarWidth: this.state.sideBarWidth === 17 ? 4 : 17
        });
        if (this.state.sideBarWidth === 17) {
            this.sideBarContent = [];
        } else if (this.state.sideBarWidth === 4) {
            this.sideBarContent = [
                'На головну',
                'Особистий кабінет',
                'Інформація про оплату',
                'xxx.xxx@gmail.com',
                'Our telegram',
                'Developed by: Jonco Lab Web Development'
            ];
        }
    }

    render() {
        return (
            <section className="const-sidebar" style={{width: parseInt(this.state.sideBarWidth) + '%'}}>
                <nav className="const-menu">
                    <button className="hamburger-btn" onClick={this.clickHandler}>☺</button>
                    <a href="#"><span>☻</span> {this.sideBarContent[0]}</a>
                    <a href="#"><span>♥</span> {this.sideBarContent[1]}</a>
                    <a href="#"><span>♦</span> {this.sideBarContent[2]}</a>
                </nav>
                <nav className="sections">
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                </nav>
                <section className="const-info">
                    <a className="info-mail" href="#"><span>♣</span> {this.sideBarContent[3]}</a>
                    <a className="info-telegram"><span>♠</span> {this.sideBarContent[4]}</a>
                    <h3 className="copyright"><span>©</span> {this.sideBarContent[5]}</h3>
                </section>
            </section>
        );
    }
}