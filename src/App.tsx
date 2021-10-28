import React from 'react';
import o from './App.module.css';
import {Header} from './components/header/Header';
import {Nav} from './components/nav/Nav';
import {Profile} from './components/content/profile/Profile';

import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/content/news/News';
import {Settings} from './components/content/settings/Settings';
import {Dialogs} from './components/content/dialogs/Dialogs';
import {StateType} from './redux/state';


type AppType = {
    data: StateType;
}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className={o.AppWrapper}>
                <Header/>
                <Nav data={props.data.dataNav}/>
                <div className={o.content}>
                    <Route path={'/Profile'} render={() => <Profile data={props.data.dataProfile}/>}/>
                    <Route path={'/Dialogs'} render={() => <Dialogs data={props.data.dataDialogs}/>}/>
                    <Route path={'/News'} render={() => <News/>}/>
                    <Route path={'/Settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

