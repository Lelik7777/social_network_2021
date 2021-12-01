import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'typeface-roboto';

import ReactDOM from 'react-dom';
import App from './App';
import {ReducersType, reduxStore} from './redux/redux-store';
import {Store} from 'redux';


const rerender = (store: Store<ReducersType, any>) => {
    ReactDOM.render(
        <App
            data={store.getState()}
            dispatch={store.dispatch}
        />,
        document.getElementById('root')
    );
}
rerender(reduxStore);
reduxStore.subscribe(() => rerender(reduxStore));
//store.subscriber(rerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
