import React from 'react';
import './About.css';
import Header from '../components/Header';
import LeftNav from '../components/LeftNav';


const About = () => {
    return (
        
        <div className="aboutContainer">
            <LeftNav />
            
            <div id="aboutBody">
                <Header name="About" />

                <h3>What?</h3>  
                <p className="aboutParagraphs">
                    JS Interview Questions is an open source API
                    containing questions and answers to javascript related interview questions.
                    That's it! Plain and Simple.
                </p>
                <h3>Why?</h3>
                <p className="aboutParagraphs">
                    As an entry level developer still trying to break into the world of code
                    I felt it was necessary to build a website showcasing my skills on 
                    github and at the same time begin practice interviewing. Sounds like a win, win.
                </p>  

                <h3>Who's it for?</h3>
                <p>
                    This API is for anyone who is currently going through the struggle of finding time
                    to practice interview while also building full scale apps. In addition to watching
                    YouTube videos, reading medium articles, and publishing you're own portfolio for 
                    all to see, I think there is a real use case for the world of independent 
                    teachers of code (i.e. YouTubers/bloggers etc..). My goal is for those people to 
                    incorporate my API into there sites for learning purposes.
                </p>
            </div>

        </div>
        
    )
}

export default About;