import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {selectSection} from "../../../store/events";

class Section extends Component {
    showSections() {
        return this.props.sections.map ((section) => {
            return (
                <section
                    onClick={() => this.props.selectSections (section)}
                    key={section.order}
                >
                    I'm the {section.order} section!
                </section>
            );
        });
    }

    render() {
        return (
            <nav className="const-menu">
                {this.showSections()}
            </nav>
        );
    }
}

function mapStateToProps (state) {
    return {
        sections: state.sections
    }
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        selectSections: selectSection
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Section);