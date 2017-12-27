import React, {Component} from "react";
import {Section} from "./main/Section";

export class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sideBarWidth: 17,
            sideBarClass: 'const-sidebar'
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.value = this.value.bind(this);
    }

    clickHandler() {
        this.setState({
            sideBarWidth: this.state.sideBarWidth === 17 ? 4 : 17
        });
        if (this.state.sideBarWidth === 17) {
            this.setState({sideBarClass: 'const-sidebar active'});
        } else if (this.state.sideBarWidth === 4) {
            this.setState({sideBarClass: 'const-sidebar'});
        }
    }

    /**
     * @param component Компонент, який ти хоч збілдити в конструктор
     */
    value(component) {
        this.props.value(component);
    }

    render() {
        return (
            <section className={this.state.sideBarClass} style={{width: parseInt(this.state.sideBarWidth) + '%'}}>
                <nav className="const-menu">
                    <button className="hamburger-btn" onClick={this.clickHandler}>☺</button>
                    <a href="#">☻ <span>Головна</span></a>
                    <a href="#">♥ <span>Кабінет</span></a>
                    <a href="#">♦ <span>Оплата</span></a>
                </nav>
                <nav className="sections">
                    <Section value={this.value}/>
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
                    <a className="info-mail" href="#">♣ <span>xxx.xxx@gmail.com</span></a>
                    <a className="info-telegram">♠ <span>Our telegram</span></a>
                    <a className="copyright">© <span>Developed by: Jonco Lab</span></a>
                </section>
            </section>
        );
    }
}