import React from 'react';

const Audit = ({
    histories
}) => (
    <div>
        <h1>Below is the audit log of user behavior</h1>
        <ul>
            {
                histories.map((item, index) => (
                    <li key={index}>
                        {item.text} - {item.action} - {item.time}
                    </li>
                ))
            }
        </ul>
    </div>
);

export default Audit;