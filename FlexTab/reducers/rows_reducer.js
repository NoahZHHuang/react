import {handleActions} from 'redux-actions';
import Immutable from 'immutable';
import {FILTER, PAGINATION} from '../constants/action_type';
import {Config} from '../constants/config';
import {mockData} from '../constants/mock_data';

const RowsReducer = handleActions(
	{
        FILTER: (state, {payload}) => {
            let keyword = payload.keyword.toLowerCase();
            let rows_to_handle = state.get('rows');
            if(!!keyword){
                rows_to_handle = rows_to_handle.filter( row => {
                    let found = false;
                    Config.columnMetadata.map((meta)=>{
                        if(row.get(meta["columnName"]).toString().toLowerCase().indexOf(keyword)>-1){
                            found = true;
                            return;
                        }
                    })
                    return found;
                })
            }
            return state.set('rows_handled', rows_to_handle);
        },
        PAGINATION: (state, {payload}) =>{
            let rows_to_handle = state.get('rows');
            let pageSize = payload.pageSize;
            let currentIndex = payload.currentIndex;
            let begin = (currentIndex - 1) * pageSize;
            let end = currentIndex * pageSize;
            return state.set('rows_handled', rows_to_handle.slice(begin, end));
        }
	},
	Immutable.fromJS({
		'rows' : mockData,
        'rows_handled' : mockData
	})
);

export default RowsReducer;