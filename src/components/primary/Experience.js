import React from 'react';

import Position from './Position';

const experience = props => (
    props.experience.map((position, i) =>
        <Position key={i} position={position}/>
    )
);


export default experience;
