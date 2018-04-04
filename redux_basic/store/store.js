import {createStore, applyMiddleware} from 'redux';
import Immutable from 'immutable';
import rootReducer from '../reducers/root_reducer';
import {LOGGER} from '../middlewares/logger';
import thunk from 'redux-thunk';

const initialState = Immutable.Map();

export default createStore(
    rootReducer, 
    initialState,
    applyMiddleware(LOGGER, thunk)
);

//if only applyMiddleware(LOGGER),  "thunk" is not applied, we will get below error when dispatch auditAction
//index_bundle.js:8056 Uncaught Error: Actions must be plain objects. Use custom middleware for async actions.