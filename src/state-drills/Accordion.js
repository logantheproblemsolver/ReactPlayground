import React, {Component} from 'react';


class Accordion extends Component {
    static defaultProps = {
        section: []
    };

    state = {
        activeSectionIndex: null,
    }


    handleSetActiveSection= (sectionIndex) => {
        this.setState({
            activeSectionIndex: sectionIndex,
        })
    }


    renderItem(section, idx, activeSectionIndex) {
        return (
            <li key={idx}>
                <button 
                    type='button'
                    onClick={() => this.handleSetActiveSection(idx)}>
                        {section.title}
                </button>
                {(activeSectionIndex === idx) && <p>{section.content}</p>}    
            </li>
        )
    }

    render() {
        const {activeSectionIndex} = this.state
        const {section} = this.props
        return (
            <ul>
                {section.map((section,  idx) => 
                    this.renderItem(section, idx, activeSectionIndex)
                )}
            </ul>
        )
    }
}

export default Accordion