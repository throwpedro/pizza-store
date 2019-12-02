import React from "react";
import Welcome from './frontpage/welcome/welcome';
import Header from './shared/header/header';
import "./App.css";

function App() {
    return (
        <div className="App">
                <Header />
            <header className="App-header">
            </header>
            <Welcome />
        </div>
    );
}

export default App;
