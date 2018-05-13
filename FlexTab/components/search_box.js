import React from 'react';
import {SearchBoxLess} from '../less/search_box.less';

const SearchBox = ({
    keyword,
    onTextChange,
}) => (
    <div className='search_box'>
        <span className='search_box_key_word_group hint_add_on'>Key Word</span>
        <input className='search_box_key_word_group key_word_input' type='text' value={keyword} onChange={onTextChange} placeholder="search"/>
    </div>
)

export default SearchBox;