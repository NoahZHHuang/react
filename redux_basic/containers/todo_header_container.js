import {connect} from 'react-redux';
import TodoHeader from '../components/todo_header';

import {
    createTodo,
    changeText,
} from '../actions/todo_action';

import {
    auditAction
} from '../actions/audit_action';

export default connect (
    (state) => ({
        todo : state.getIn(['todoReducer','todo'])
    }),
    (dispatch) => ({
        onChanageText: (event) => (
            dispatch(changeText({text: event.target.value}))
        ),
        onCreateTodo: () => {
            dispatch(createTodo());
            dispatch(auditAction('Add'));
            dispatch(changeText({text:''}));
        }
    })
)(TodoHeader);