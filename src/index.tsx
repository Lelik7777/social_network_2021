import React from 'react';
import './index.css';
import 'typeface-roboto';

import ReactDOM from 'react-dom';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import App from './App';
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
