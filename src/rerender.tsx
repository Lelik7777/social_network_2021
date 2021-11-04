import ReactDOM from 'react-dom';
import App from './App';

import React from 'react';
import {StateType} from './redux/state';
import {addMessage, addPost} from './redux/state';


export const rerender = (state: StateType) => {
    ReactDOM.render(
        <App data={state} callBack={addPost} callBack2={addMessage}/>,
        document.getElementById('root')
    );

}
