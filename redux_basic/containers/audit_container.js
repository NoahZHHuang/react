import {connect} from 'react-redux';
import Audit from '../components/audit';

import {
    deleteTodo
} from '../actions/todo_action'

export default connect(
    (state) => ({
        histories : state.getIn(['auditReducer','histories'])
    })
)(Audit);
