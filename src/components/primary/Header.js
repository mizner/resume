import React from 'react';

const Header = props => (
    <header>
        <h1>{props.candidate.firstName} {props.candidate.lastName}</h1>
        <h2>{props.candidate.title}</h2>
    </header>
);

export default Header;