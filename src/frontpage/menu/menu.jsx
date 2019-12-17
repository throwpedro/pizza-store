import React from 'react';
import './menu.scss';
import pizza from '../../media/pizza.png';

const Menu = () => {
    return (
        <div className="see-pizzas-wrapper">
            <h3>See pizzas</h3>
            <span>See our big selection of pizzas!</span>
            <img src={pizza} alt="pizza"/>
        </div>
    );
}

export default Menu;