import React, {Component} from 'react';

class SectionLink extends Component {
    render() {
        return (
            <section
                className="section-link"
            >
                <button>{this.props.sectionOrderText}</button>
            </section>
        )
    }
}

export default SectionLink