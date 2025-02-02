import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {userReducer} from './reducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {watchLoadUserData} from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    user: userReducer,
    userRepos: userReducer
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLoadUserData);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
