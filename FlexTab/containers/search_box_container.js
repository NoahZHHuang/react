import {connect} from 'react-redux';
import SearchBox from '../components/search_box';
import {SEARCH_ACTION} from '../actions/search_action';
import {FILTER_ACTION} from '../actions/filter_action';

export default connect (
    (state) => ({
        keyword : state.getIn(['searchBoxReducer','keyword'])
        }
    ),
    (dispatch) => ({
        onTextChange: (event) => {
            let keyword = event.target.value;
            new Promise((resolve)=>{
                dispatch(SEARCH_ACTION({'keyword':keyword}));
                resolve();
                }
            ).then(
                ()=>{
                    dispatch(FILTER_ACTION({'keyword':keyword}));
                }
            )
        }
    })
)(SearchBox);