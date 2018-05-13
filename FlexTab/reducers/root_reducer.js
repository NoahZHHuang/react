import {combineReducers} from 'redux-immutable';
import rowsReducer from './rows_reducer';
import searchBoxReducer from './search_box_reducer';
import footerReducer from './footer_reducer'

const rootReducer = combineReducers({
    rowsReducer,
    searchBoxReducer,
    footerReducer
});

export default rootReducer;