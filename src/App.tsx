import React from 'react';
import o from './App.module.css';
import {Route} from 'react-router-dom';
import {News} from './components/content/news/News';
import {Settings} from './components/content/settings/Settings'
import {NavContainer} from './components/nav/NavContainer';
import {DialogsContainer} from './components/content/dialogs/DialogsContainer';
import {UsersContainerClass} from './components/content/users/UsersAPIClass';
import {ProfileContainerWithAPI} from './components/content/profile/ProfileContainerWithAPI';
import HeaderContainerWithAPI from './components/header/HeaderContainerWithAPI';
import {Login} from './components/content/login/Login';


function App() {
    return (

            <div className={o.AppWrapper}>
                <HeaderContainerWithAPI/>
                <NavContainer/>
                <div className={o.content}>
                    <Route path={'/Profile/:userId?'} render={() => <ProfileContainerWithAPI/>}/>
                    <Route path={'/DialogsContainer'} render={() => <DialogsContainer/>}/>
                    <Route path={'/Users'} render={() => <UsersContainerClass/>}/>
                    <Route path={'/News'} render={() => <News/>}/>
                    <Route path={'/Settings'} render={() => <Settings/>}/>
                    <Route path={'/Login'} render={()=><Login/>}/>
                </div>
            </div>

    );
}

export default App;
