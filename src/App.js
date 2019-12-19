import React from "react";
import Button from '@material-ui/core/Button';
import Frontpage from './frontpage/frontpage';
import Header from './shared/header/header';
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <div className="page-wrapper">
                <Frontpage />
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        </>
    );
}

export default App;
