import React from 'react';

const Repo = (props) => (
    <div>
        <h3>Repo</h3>
        <h5>{props.match.params.name}</h5>
    </div>
);

export default Repo;