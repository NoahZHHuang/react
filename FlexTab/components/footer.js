import React from 'react';
import { PAGINATION_ACTION } from '../actions/pagination_action';
import { Config } from '../constants/config';
import {common} from '../less/common.less';
import {FooterLess} from '../less/footer.less';



class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let pageSize = this.props.pageSize;
        let currentIndex = this.props.currentIndex;
        let initialPagination = this.props.initialPagination;
        initialPagination(pageSize, currentIndex);
    }

    render() {
        let pageSize = this.props.pageSize;
        let from = this.props.from;
        let to = this.props.to;
        let total = this.props.total;
        let currentIndex = this.props.currentIndex;
        let indexes = this.props.indexes;
        let onPageSizeChange = this.props.onPageSizeChange;
        let onCurrentIndexChange = this.props.onCurrentIndexChange
        let onPagePre = this.props.onPagePre;
        let onPageNext = this.props.onPageNext;
        return (
            <div className='footer'>
                <div className='footer-left'>
                    <span>Page Size:</span>
                    <select onChange={(e) => onPageSizeChange(e, currentIndex, total)} className='pageSizeInfo'>
                        {
                            [5, 10, 20, 50].map(
                                (size) => (
                                    <option value={size} selected={size === pageSize}>{size}</option>
                                )
                            )
                        }
                    </select>
                </div>
                <div className='footer-middle'>
                    <strong className='pageRowInfo'>{from}</strong>
                    to 
                    <strong className='pageRowInfo'>{to}</strong>
                    of 
                    <strong className='pageRowInfo'>{total} </strong>
                    rows
                </div>
                <div className='footer-right'>
                    <button className='button_pre' onClick={(e) => onPagePre(e, currentIndex, pageSize)}>Prev</button>
                    <select onChange={(e) => onCurrentIndexChange(e, pageSize)} className='pageIndexInfo'>
                        {
                            indexes.map(
                                (index) => (
                                    <option value={index} selected={index === currentIndex}>{index}</option>
                                )
                            )
                        }
                    </select>
                    <button className='button_next' onClick={(e) => onPageNext(e, currentIndex, total, pageSize)}>Next</button>
                </div>
            </div>
        );
    }
}


export default Footer;




