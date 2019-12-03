import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <header className="pageHeader">
            <div className="left"><input className="headerSearch" type="text" placeholder="Search"/></div>
            <div className="right"></div>
        </header>
     );
}

export default Header;
