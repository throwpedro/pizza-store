import React from 'react';
import Menu from './menu/menu';
import './frontpage.scss';

class Frontpage extends React.Component {
    render() {
        return (
            <div className='frontpage-wrapper'>
                <Menu toggle={this.props.toggle}/>
            </div>
        );
    }
}

export default Frontpage;