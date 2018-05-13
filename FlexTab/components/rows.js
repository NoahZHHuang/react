import React from 'react';
import Row from '../components/row'

const Rows = ({
    rows_handled,    
}) => (
    <tbody>
        {
            rows_handled.map((row, index)=>
                {
                    return(
                        <Row row={row}/>       
                    )
                }
            )
        }
    </tbody>
);


export default Rows;
