import {connect} from 'react-redux';
import Rows from '../components/rows';


export default connect (
    (state) => ({
        rows_handled : state.getIn(['rowsReducer','rows_handled'])
    })
)(Rows);