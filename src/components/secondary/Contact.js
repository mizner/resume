import React from 'react';

const contact = props => (
    <aside>
        <h3>Contact</h3>
        <p>{props.candidate.email}</p>
        <p>{props.candidate.number}</p>
    </aside>
);

export default contact;
