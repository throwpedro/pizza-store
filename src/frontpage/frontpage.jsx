import React from 'react';
import Welcome from './welcome/welcome';

class Frontpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <Welcome />
        );
    }
}

export default Frontpage;