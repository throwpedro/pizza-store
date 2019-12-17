import React from "react";
import Frontpage from './frontpage/frontpage';
import Header from './shared/header/header';
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <div className="page-wrapper">
                <Frontpage />
            </div>
        </>
    );
}

export default App;
