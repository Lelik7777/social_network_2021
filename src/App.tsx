import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Nav} from './components/nav/Nav';
import {Profile} from './components/content/profile/Profile';

function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <Nav/>
            <Profile/>

        </div>
    );
}

export default App;

