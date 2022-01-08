import React from 'react';
import o from './App.module.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/content/news/News';
import {Settings} from './components/content/settings/Settings'
import {NavContainer} from './components/nav/NavContainer';
import {DialogsContainer} from './components/content/dialogs/DialogsContainer';
import {UsersContainerClass} from './components/content/users/UsersAPIClass';
import {ProfileContainer} from './components/content/profile/ProfileContainer';
import HeaderContainerWithAPI from './components/header/HeaderContainerWithAPI';


function App() {
    return (
        <BrowserRouter>
            <div className={o.AppWrapper}>
                <HeaderContainerWithAPI/>
                <NavContainer/>
                <div className={o.content}>
                    <Route path={'/Profile/:userId?'} render={() => <ProfileContainer/>}/>
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
