import React from 'react';
import o from './App.module.css';
import {Header} from './components/header/Header';
import {Nav} from './components/nav/Nav';
import {Profile} from './components/content/profile/Profile';
import {Dialogs} from './components/content/dialog/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/content/news/News';
import {Settings} from './components/content/settings/Settings';

function App() {
    return (
        <BrowserRouter>
            <div className={o.AppWrapper}>
                <Header/>
                <Nav/>
                <div className={o.content}>
                    <Route path={'/Profile'} component={Profile}/>
                    <Route path={'/Dialogs'} component={Dialogs}/>
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

