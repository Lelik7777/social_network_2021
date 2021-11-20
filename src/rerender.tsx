import ReactDOM from 'react-dom';
import App from './App';

import React from 'react';
import {StateType, updateNewText} from './redux/state';
import {addMessage, addPost} from './redux/state';


export const rerender = (state: StateType) => {
    ReactDOM.render(
        <App
            data={state}
            addPost={addPost}
            addMessage={addMessage}
            updateNewText={updateNewText}
        />,
        document.getElementById('root')
    );

}
