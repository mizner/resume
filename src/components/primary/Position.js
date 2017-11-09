import React from 'react';

import Task from './Task';

const position = props => (
    <article className="position">
        <h3>{props.position.company}: {props.position.location} -- {props.position.title}</h3>
        <h4>{props.position.year.start} - {props.position.year.end}</h4>
        <ul>
            {props.position.tasks.map((task, i) =>
                <Task key={i} task={task}/>
            )}
        </ul>
    </article>
);

export default position;
