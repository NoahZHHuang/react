export const LOGGER = store => next => action => {
    console.log('---------------------------------------');
    console.log('old todo: {}', JSON.stringify(store.getState().getIn(['todoReducer','todo']).toJS()));
	console.log('old todos: {}', JSON.stringify(store.getState().getIn(['todoReducer','todos']).toJS()));
	//console.log('old histories: {}', JSON.stringify(store.getState().getIn(['auditReducer','histories']).toJS()));
	console.log('dispatch action: {}', JSON.stringify(action));
	next(action);
	console.log('new todo: {}', JSON.stringify(store.getState().getIn(['todoReducer','todo']).toJS()));
	console.log('new todos: {}', JSON.stringify(store.getState().getIn(['todoReducer','todos']).toJS()));
	//console.log('new histories: {}', JSON.stringify(store.getState().getIn(['auditReducer','histories']).toJS()));
};