import React from "react";
import Frontpage from './frontpage/frontpage';
import Header from './shared/header/header';
import Menu from './menu/menu';
import "./App.css";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            showFrontpage: true,
            showMenu: false,
        };
        this.toggleShowMenuOrFrontpage = this.toggleShowMenuOrFrontpage.bind(this);
    }

    toggleShowMenuOrFrontpage() {
        this.setState((prevState) => ({
            showFrontpage: !prevState.showFrontpage,
            showMenu: !prevState.showMenu,
        }));
    }

    render() {
        console.log(this.state);
        return (
            <>
                <Header />
                {this.state.showFrontpage ? (
                    <Frontpage toggle={this.toggleShowMenuOrFrontpage} />
                ) : (
                    <Menu toggle={this.toggleShowMenuOrFrontpage} />
                )}
            </>
        );
    }
}
