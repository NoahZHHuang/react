import { connect } from 'react-redux';
import Footer from '../components/footer';
import { Config } from '../constants/config';
import { PAGINATION_ACTION } from '../actions/pagination_action';
import { CHANGE_PAGE_SIZE_ACTION } from '../actions/change_page_size_action';
import { CHANGE_PAGE_INDEX_ACTION } from '../actions/change_page_index_action';


export default connect(
    (state) => {
        let rows = state.getIn(['rowsReducer', 'rows']);
        let total = rows.size;
        let pageSize = parseInt(state.getIn(['footerReducer', 'pageSize']));
        let currentIndex = parseInt(state.getIn(['footerReducer', 'currentIndex']));
        let from = (currentIndex - 1) * pageSize + 1;
        let to = currentIndex * pageSize;
        to = to > total ? total : to;
        let maxIndex = Math.floor(total / pageSize);
        maxIndex = total % pageSize == 0 ? maxIndex : maxIndex + 1;
        let indexes = [];
        for (let i = 1; i <= maxIndex; i++) {
            indexes.push(i);
        }
        return {
            pageSize: pageSize,
            currentIndex: currentIndex,
            from: from,
            to: to,
            total: total,
            indexes: indexes
        };
    },
    (dispatch) => ({
        onPageSizeChange: (event, currentIndex, total) => {
            let pageSize = parseInt(event.target.value);
            let maxIndex = Math.floor(total / pageSize);
            maxIndex = total % pageSize == 0 ? maxIndex : maxIndex + 1;
            currentIndex = parseInt(currentIndex);
            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }
            new Promise((resolve) => {
                dispatch(CHANGE_PAGE_SIZE_ACTION({
                    'pageSize': pageSize,
                    'currentIndex': currentIndex
                }));
                resolve();
            }
            ).then(
                () => {
                    dispatch(PAGINATION_ACTION({
                        'pageSize': pageSize,
                        'currentIndex': currentIndex
                    }));
                }
            )
        },
        onCurrentIndexChange: (event, pageSize) => {
            let currentIndex = parseInt(event.target.value);
            pageSize = parseInt(pageSize);
            new Promise((resolve) => {
                dispatch(CHANGE_PAGE_INDEX_ACTION({ 'currentIndex': currentIndex }));
                resolve();
            }).then(
                () => {
                    dispatch(PAGINATION_ACTION({
                        'pageSize': pageSize,
                        'currentIndex': currentIndex
                    }));
                }
            )
        },
        initialPagination: (pageSize, currentIndex) => {
            dispatch(PAGINATION_ACTION({
                'pageSize': pageSize,
                'currentIndex': currentIndex
            }));
        },
        onPagePre: (event, currentIndex, pageSize) => {
            if (currentIndex > 1) {
                new Promise((resolve) => {
                    dispatch(CHANGE_PAGE_INDEX_ACTION({ 'currentIndex': currentIndex - 1 }));
                    resolve();
                }).then(
                    dispatch(PAGINATION_ACTION({
                        'pageSize': pageSize,
                        'currentIndex': currentIndex - 1
                    }))
                );
            }
        },
        onPageNext: (event, currentIndex, total, pageSize) => {
            let maxIndex = Math.floor(total / pageSize);
            maxIndex = total % pageSize == 0 ? maxIndex : maxIndex + 1;
            if (currentIndex < maxIndex) {
                new Promise((resolve) => {
                    dispatch(CHANGE_PAGE_INDEX_ACTION({ 'currentIndex': currentIndex + 1 }));
                    resolve();
                }).then(
                    dispatch(PAGINATION_ACTION({
                        'pageSize': pageSize,
                        'currentIndex': currentIndex + 1
                    }))
                );
            }
        }
    })
)(Footer);
