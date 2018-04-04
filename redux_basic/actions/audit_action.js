import {
    AUDIT_TODO
} from '../constants/action_type';

export const auditAction = (addOrRemove,removedIndex) => (
	(dispatch, getState) => {
		if(addOrRemove == 'Add'){
			const addedTodo = getState().getIn(['todoReducer','todo']);
			dispatch({type:AUDIT_TODO, payload: {text:addedTodo.get('text'),addOrRemove:'Add'}});
		}else if(addOrRemove == 'Remove'){
			const removedTodo = getState().getIn(['todoReducer','todos',removedIndex]);
			dispatch({type:AUDIT_TODO, payload: {text:removedTodo.get('text'),addOrRemove:'Remove'}});
		}
	}
)

//auditAction is an example of "redux-thunk"
//"thunk" is a middle function which has the "dispatch" and "getState" params
//in "thunk", we can do sth before we re-dispatch 
//above is a senario , we define the action type, and construct the payload based on the "addOrRemove" flag and "removedIndex"
//there is another senario, that is we need to fetch the server side data before re-dispatch