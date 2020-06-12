import React from 'react';
import './style.css';

const About = () => {
    return (
        <div className="aboutContainer">
            <div className="aboutBody">
                Follow the project on github!
            
                <a href="https://github.com/pswartz66/JSInterviewQuestionsAPI" className="githubLink">
                Source Code     
                </a>
                <div className="aboutTag">
                    Created by Phil Swartz
                </div>
            </div>
        </div>
    )
}

export default About;
