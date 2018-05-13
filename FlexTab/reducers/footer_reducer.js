import {handleActions} from 'redux-actions';
import Immutable from 'immutable';
import {Config} from '../constants/config';
import {CHANGE_PAGE_SIZE} from '../constants/action_type';
import {CHANGE_PAGE_INDEX} from '../constants/action_type';

const footerReducer = handleActions(
    {
        CHANGE_PAGE_SIZE: (state, {payload}) => {
            return state.merge({
                'pageSize' : payload.pageSize,
                'currentIndex' : payload.currentIndex
            });
        },
        CHANGE_PAGE_INDEX: (state, {payload}) => {
            return state.set('currentIndex', payload.currentIndex);
        }
    },
    Immutable.fromJS({
        'pageSize' : Config.initialPageSize ,
        'currentIndex' : 1
	})
);

export default footerReducer;
