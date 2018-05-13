export const LOGGER = store => next => action => {
    console.log('---------------------------------------');
    console.log('old state: {}', JSON.stringify(store.getState()));
	console.log('dispatch action: {}', JSON.stringify(action));
	next(action);
	console.log('new state: {}', JSON.stringify(store.getState()));
};