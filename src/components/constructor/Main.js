import React, {Component} from "react";
import {connect} from "react-redux";


class Main extends Component {
    render() {
        if(this.props.section = null) return <h1>Выберите блок...</h1>;
        return (
            <main id="const-main">
                <section
                >
                    I'm the {this.props.order} section!
                </section>
            </main>
        );
    }
}

function mapStateToProps (state) {
    return {
        section: state.active
    }
}

export default connect(mapStateToProps)(Main);