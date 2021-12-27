import React from 'react';
import o from './App.module.css';
import {Header} from './components/header/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/content/news/News';
import {Settings} from './components/content/settings/Settings'
import {NavContainer} from './components/nav/NavContainer';
import {Profile} from './components/content/profile/Profile';
import {DialogsContainer} from './components/content/dialogs/DialogsContainer';
import {UsersContainerClass} from './components/content/users/UsersClass';


function App() {
    return (
        <BrowserRouter>
            <div className={o.AppWrapper}>
                <Header/>
                <NavContainer/>
                <div className={o.content}>
                    <Route path={'/Profile'} render={() => <Profile/>}/>
                    <Route path={'/DialogsContainer'} render={() => <DialogsContainer/>}/>
                    <Route path={'/Users'} render={() => <UsersContainerClass/>}/>
                    <Route path={'/News'} render={() => <News/>}/>
                    <Route path={'/Settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
const man = {
    name: 'alex',
    age: 33,
    address: {
        city: 'simf',
        street: 'tampovska'
    }
}
type ManType = typeof man;
type KeysManType = keyof ManType;
type All = ManType[KeysManType];