import React from 'react';

const skills = props => {
    return (
        <aside>
            <h3>{props.title}</h3>
            <ul>
                {props.skills.map((skill, i) =>
                    <li>{skill}</li>
                )}
            </ul>
        </aside>
    )
}

export default skills;
