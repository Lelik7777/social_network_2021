import React from 'react';
import o from './App.module.css';
import {Header} from './components/header/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/content/news/News';
import {Settings} from './components/content/settings/Settings'
import {NavContainer} from './components/nav/NavContainer';
import {Profile} from './components/content/profile/Profile';
import {DialogsContainer} from './components/content/dialogs/DialogsContainer';


function App() {
    return (
        <BrowserRouter>
            <div className={o.AppWrapper}>
                <Header/>
                <NavContainer/>
                <div className={o.content}>
                    <Route path={'/Profile'} render={() => <Profile/>}/>
                    <Route path={'/DialogsContainer'} render={() => <DialogsContainer/>}/>
                    <Route path={'/News'} render={() => <News/>}/>
                    <Route path={'/Settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;