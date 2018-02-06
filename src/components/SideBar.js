import React, {Component} from "react";
import classSet from 'react-classset';
import Section from './constructor/main/Section';
import {Pages, switchAction} from "../store/actionCreators";
import {connect} from 'react-redux';

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.sectionsArr = props.sectionsArr;

        this.state = {
            sideBarWidth: 17
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.pushSection = this.pushSection.bind(this);
    }

    // Event for closing and opening SideBar
    clickHandler() {
        this.setState({
            sideBarWidth: this.state.sideBarWidth === 17 ? 4 : 17
        });
    }

    pushSection(id, key) {
        this.sectionsArr.push({
            sectionId: id,
            sectionKey: key
        });

        this.props.addSection(this.sectionsArr);
    }


    render() {
        console.log(this.props.currentPage);
        console.log(this.sectionsArr);
        // Add second class to sidebar
        const sideBarClass = classSet({
            'const-sidebar': true,
            'active': this.state.sideBarWidth === 4
        });

        return (
            <section className={sideBarClass} style={{width: parseInt(this.state.sideBarWidth) + '%'}}>
                <nav className="const-menu">
                    <button className="hamburger-btn" onClick={this.clickHandler}>☺</button>
                    <a href="#">☻
                        <span
                            onClick={() => {
                                if(this.props.currentPage !== 'RENDER_SIGN') this.props.toSign();
                            }}
                        >Вийти
                        </span>
                    </a>
                    <a href="#">♥
                        <span
                            onClick={() => {
                                if(this.props.currentPage !== 'RENDER_PROFILE') this.props.toProfile();
                            }}
                        >Кабінет
                        </span>
                    </a>
                    <a href="#">♦
                        <span
                            onClick={() => {
                                if(this.props.currentPage !== 'RENDER_CONSTRUCTOR') this.props.toConstructor();
                            }}
                        >Конструктор
                        </span>
                    </a>
                    <a href="#">♦
                        <span
                            onClick={() => {
                                if(this.props.currentPage !== 'RENDER_PAYMENT') this.props.toPayment();
                            }}
                        >Оплата
                        </span>
                    </a>
                </nav>
                <section className="sections-box">
                    <Section sectionId={1} sectionKey={1} target={this.sectionsArr} onClick={this.pushSection(1, 1)}/>
                    <Section sectionId={2} sectionKey={2} target={this.sectionsArr} onClick={this.pushSection(1, 1)}/>
                    <Section sectionId={3} sectionKey={3} target={this.sectionsArr} onClick={this.pushSection(1, 1)}/>
                    <Section sectionId={4} sectionKey={4} target={this.sectionsArr} onClick={this.pushSection(1, 1)}/>
                </section>
                <section className="const-info">
                    <a className="info-mail" href="#">♣ <span>xxx.xxx@gmail.com</span></a>
                    <a className="info-telegram">♠ <span>Our telegram</span></a>
                    <a className="copyright">© <span>Developed by: Jonco Lab</span></a>
                </section>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.switchPage.filter
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        toSign: () => {
            dispatch(switchAction(Pages.RENDER_SIGN));
        },

        toProfile: () => {
            dispatch(switchAction(Pages.RENDER_PROFILE));
        },

        toConstructor: () => {
            dispatch(switchAction(Pages.RENDER_CONSTRUCTOR));
        },

        toPayment: () => {
            dispatch(switchAction(Pages.RENDER_PAYMENT));
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)


