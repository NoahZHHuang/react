import {handleActions} from 'redux-actions';
import {TodoState} from '../constants/model';
import Immutable from 'immutable';

import {
    CREATE_TODO,
    DELETE_TODO,
    CHANGE_TEXT
} from '../constants/action_type';

const todoReducer = handleActions(
    {
        CREATE_TODO: (state, {payload}) => {
            let todos = state.get('todos').push(state.get('todo'));
            return state.set('todos', todos);
        },
        DELETE_TODO: (state, {payload}) => (
            state.set('todos', state.get('todos').splice(payload.index, 1))
        ),
        CHANGE_TEXT: (state, {payload}) => (
            state.merge({'todo':payload})
        )
    },
    TodoState
);

export default todoReducer;