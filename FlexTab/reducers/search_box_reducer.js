import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

import {
    SEARCH
} from '../constants/action_type';

const searchBoxReducer = handleActions(
    {
        SEARCH: (state, {payload}) => {
            return state.set('keyword', payload.keyword);
        }
    },
    Immutable.fromJS({
		'keyword' : ''
	})
);

export default searchBoxReducer;