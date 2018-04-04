import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from '../components/main';
import Store from '../store/store';

ReactDOM.render(
    <Provider store={Store}>
        <Main/>
    </Provider>,
    document.getElementById('app')
);