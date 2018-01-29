import React, {Component} from "react";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: this.props.sections
        };
    }

    render() {
        if(this.state.sections !== []) {
            return <h1>Выберите блок...</h1>;
        } else {
            return (
                <main id="const-main">

                </main>
            );
        }
    }
}

export default Main