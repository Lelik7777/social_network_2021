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
    addPost: () => void;
    addMessage: (t: string | undefined) => void;
    updateNewText: (t: string) => void;
}

function App({data, addPost, addMessage, updateNewText}: AppType) {
    return (
        <BrowserRouter>
            <div className={o.AppWrapper}>
                <Header/>
                <Nav data={data.dataNav}/>
                <div className={o.content}>
                    <Route path={'/Profile'} render={() => <Profile data={data.dataProfile}
                                                                    newText={data.dataProfile.newText}
                                                                    addPost={addPost}
                                                                    updateNewText={updateNewText}
                    />}/>
                    <Route path={'/Dialogs'} render={() => <Dialogs data={data.dataDialogs}
                                                                    callBack2={addMessage}
                    />}/>
                    <Route path={'/News'} render={() => <News/>}/>
                    <Route path={'/Settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

