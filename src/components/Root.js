require('../css/main.css');

import React from 'react';

import Header from './primary/Header';
import Experience from './primary/Experience';
import Contact from './secondary/Contact';
import Skills from './secondary/Skills';

import resume from '../resources/resume.json';

const Root = () => {
    return (
        <main>
            <section className="primary">
                <Header candidate={resume.candidate}/>
                <Experience experience={resume.experience}/>
            </section>
            <section className="secondary">
                <Contact candidate={resume.candidate}/>
                <Skills title={'Modern Skills'} skills={resume.modern}/>
                <Skills title={'Traditional Skills'} skills={resume.traditional}/>
                <Skills title={'Other'} skills={resume.other}/>
                {/* <Skills title={'Bonus'} skills={resume.bonus}/> */}
            </section>
        </main>
    )
};

export default Root;