import React from 'react';
import o from './App.module.css';
import {Header} from './components/header/Header';
import {Nav} from './components/nav/Nav';
import {Profile} from './components/content/profile/Profile';
import {Dialogs} from './components/content/dialog/Dialogs';

function App() {
    return (
        <div className={o.AppWrapper}>
            <Header/>
            <Nav/>
            <div className={o.content}>
             {/*   <Profile/>*/}
                <Dialogs/>
            </div>
        </div>
    );
}

export default App;

