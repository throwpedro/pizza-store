import React from 'react';
import Menu from './menu/menu';
import './frontpage.scss';

class Frontpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
        }
        this.toggleFrontpage = this.toggleFrontpage.bind(this);
    }

    toggleFrontpage() {
        this.setState({ isOpen: false });
    }

    render() {
        const isOpen = this.state.isOpen;
        return (
            <div className='frontpage-wrapper'>
                {isOpen ? (
                    <Menu toggle={this.toggleFrontpage}/>
                ) : ( null )}
            </div>
        );
    }
}

export default Frontpage;