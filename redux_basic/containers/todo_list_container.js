import {connect} from 'react-redux';
import TodoList from '../components/todo_list';

import {
    deleteTodo
} from '../actions/todo_action'

import {
    auditAction
} from '../actions/audit_action';

export default connect(
    (state) => ({
        todos : state.getIn(['todoReducer','todos'])
    }),
    (dispatch) => ({
        onDeleteTodo: (index) => () =>{
            dispatch(auditAction('Remove',index));
            dispatch(deleteTodo({index: index}));
        }
    })
)(TodoList)

