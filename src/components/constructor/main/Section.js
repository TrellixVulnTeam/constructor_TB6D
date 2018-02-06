import React, {Component} from 'react';

class Section extends Component {
    constructor(props) {
        super(props)

        this.onClickEvent = this.onClickEvent.bind(this);
    }

    onClickEvent(target) {
        target.push(
            this.props.sectionId,
            this.props.sectionKey
        )
    }

    render() {
        return (
            <section
                className={this.props.sectionClassName}
                id={this.props.sectionId}
                key={this.props.sectionKey}
                style={{order: this.props.orderPosition}}
                onClick={this.onClickEvent(this.props.target)}
            >
                I am the {this.props.sectionId} section!
            </section>
        )
    }
}

export default Section