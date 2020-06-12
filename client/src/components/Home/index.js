import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="homeContainer">
                <div className="homeContent">

                    JSInterviewAPI is built by YOU!

                    Simply submit a question you think would be good for an interview
                    and categorize it by easy, medium, or hard.
                    
                    Thats it!

                    The API will accumulate questions as long as the JS 
                    community supports it.

                    See 
                    <Link className="linkToSubmit" to="/submit">
                        Submit
                    </Link>
                    page for more info.

                </div>
            </div>
    )
}

export default Home;
