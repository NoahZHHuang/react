import React from 'react';
import {Config} from '../constants/config';

const Row = ({
    row
}) => (
    <tr>
        {
            Config.columnMetadata.map((item, index)=>(
                <td>{row.get(item['columnName'])}</td>
            ))
        }
    </tr>
);

export default Row;



