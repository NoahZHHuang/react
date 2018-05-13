import React from 'react';
import RowsContainer from '../containers/rows_container';
import SearchBoxContainer from '../containers/search_box_container';
import Header from '../components/header';
import FooterContainer from '../containers/footer_container';
import {CommonLess} from '../less/common.less';
import {FlexibleTabLess} from '../less/flexible_tab.less';

const FlexibleTab = ({type}) => {
    if(type==="pagination"){
        return(       
            <div>
                <div className="container col-12">
                    <table className="table">
                        <Header/>
                        <RowsContainer/>
                    </table>
                </div>
                <div className="container col-12">
                    <FooterContainer/>
                </div>
            </div>
        )
    }else if (type==="filter"){
        return(       
            <div>
                <div className="container col-12">
                    <SearchBoxContainer/>
                </div>
                <div className="container col-12">
                    <table className="table">
                        <Header/>
                        <RowsContainer/>
                    </table>
                </div>
            </div>
        )
    }
};

export default FlexibleTab;

