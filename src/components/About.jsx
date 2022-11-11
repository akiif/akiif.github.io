import React from 'react';

const resumeLink = "https://drive.google.com/u/2/uc?id=14Cibaw_o5ERht5KviTBjWW_0Ezg1e6JR&export=download";

function About() {
    return (
        <section className='about colored-section' id='about'>
            <h2 className='title'>About</h2>
            <article>
            I am <span className='bold'>Akif Mohammed</span>; An aspiring Software Engineer who loves all things tech. I love to explore new technologies.
            I have completed my B.E.  in Information Science and Engineering from Mangalore, India.
            </article>

            <a className='resume-btn btn' href={resumeLink} download={true}>Download Resume</a>
        </section>
    );
}

export default About;
