import React from 'react';
import './header.scss';
import OutlinedInput from '@material-ui/core/TextField';

const Header = () => {
    return (
        <header className="pageHeader">
            <OutlinedInput
                placeholder="Search"
                color="primary"
            />
        </header>
     );
}

export default Header;
