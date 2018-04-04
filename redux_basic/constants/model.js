import Immutable from 'immutable';

export const TodoState = Immutable.fromJS({
    'todos' : [],
    'todo' : {
        text : ''
    }
});
