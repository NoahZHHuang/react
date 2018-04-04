import {combineReducers} from 'redux-immutable';
import todoReducer from './todo_reducer';
import auditReducer from './audit_reducer';

const rootReducer = combineReducers({
    todoReducer,
    auditReducer
});

export default rootReducer;