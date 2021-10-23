import React from 'react';
import o from './App.module.css';
import {Header} from './components/header/Header';
import {Nav} from './components/nav/Nav';
import {Profile} from './components/content/profile/Profile';

function App() {
    return (
        <div className={o.AppWrapper}>
            <Header/>
            <Nav/>
            <Profile/>

        </div>
    );
}

export default App;

