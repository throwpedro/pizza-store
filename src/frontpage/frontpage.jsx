import React from 'react';
import Welcome from './welcome/welcome';
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
            </div>
        );
    }
}

export default Frontpage;