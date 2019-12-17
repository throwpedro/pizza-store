import React from 'react';
import Welcome from './welcome/welcome';
import Menu from './menu/menu';
import './frontpage.scss';

class Frontpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div className='frontpage-wrapper'>
                <Welcome />
                <Menu />
            </div>
        );
    }
}

export default Frontpage;