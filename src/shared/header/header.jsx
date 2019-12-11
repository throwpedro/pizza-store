import React from "react";
import "./header.scss";
import pizzaLogo from './../../media/pizza.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={pizzaLogo} alt="pizza icon" />
            </div>
            <div className="app-name-container">
                <span>The Pizza Shop</span>
            </div>
        </header>
    );
};

export default Header;
