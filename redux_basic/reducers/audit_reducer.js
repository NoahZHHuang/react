import {handleActions} from 'redux-actions';
import Immutable from 'immutable';
import moment from 'moment';

import {
	AUDIT_TODO
} from '../constants/action_type';

const AuditReducer = handleActions(
	{
		AUDIT_TODO: (state, {payload}) => {
			let histories = state.get('histories').push({text:payload.text,time:moment().format('MMMM Do YYYY, h:mm:ss'),action:payload.addOrRemove});
			return state.set('histories', histories);
		},
	},
	Immutable.fromJS({
		'histories' : []
	})
);

export default AuditReducer;