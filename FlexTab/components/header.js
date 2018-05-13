import React from 'react';
import {Config} from '../constants/config';

const Header = () => (
    <thead>
        <tr>
            {
                Config.columnMetadata.map((item, index)=>(
                    <th>{item['displayName']}</th>
                ))
            }
        </tr>
    </thead>
);

export default Header;



