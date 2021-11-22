import React from 'react';
import o from './App.module.css';
import {Header} from './components/header/Header';
import {Nav} from './components/nav/Nav';
import {Profile} from './components/content/profile/Profile';

import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/content/news/News';
import {Settings} from './components/content/settings/Settings';
import {Dialogs} from './components/content/dialogs/Dialogs';
import {StoreType} from './redux/store';


type AppType = {
    store: StoreType;
}

function App({store}: AppType) {
    return (
        <BrowserRouter>
            <div className={o.AppWrapper}>
                <Header/>
                <Nav data={store.getState().dataNav}/>
                <div className={o.content}>
                    <Route path={'/Profile'} render={() => <Profile store={store}/>}/>
                    <Route path={'/Dialogs'} render={() => <Dialogs data={store.getState().dataDialogs}
                                                                    dispatch={store.dispatch.bind(store)}
                    />}/>
                    <Route path={'/News'} render={() => <News/>}/>
                    <Route path={'/Settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

