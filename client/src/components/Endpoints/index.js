import React from 'react';
import './style.css';

class Endpoints extends React.Component {




    render() {

        let all = `
        {
          "questions": {
            "easy": [
              "What is the difference between let and const?",
              "What is NAN?",
              "What is the difference between == and ===?"
            ],
            "medium": [
              "What is a "closure" in Javascript?",
              "The "this" keyword in Javascript pertains 
              to what exactly?"  
            ],
            "hard": [
              "Can you explain the difference between prototypical 
              and class based inheritance?",
              "What are two factors that must be present 
              for any recursive function to work correctly?"
            ],
          }
        }`
        return (
            <div className="endpointsContainer">
                <div className="endpointsContent">

                    <div className="endpointsTitle">Endpoints:</div>

                    <div className="endpointsTabs">
                        <ul className="epItem">All Questions:</ul>
                        <div>https://jsinterview/api/all</div>

                        <pre className="epItemCode">

                            {all}


                        </pre>
                        <br></br>

                        <ul className="epItem">Easy</ul>
                        <div>https://jsinterview/api/easy</div>

                        <br></br>

                        <ul className="epItem">Medium</ul>
                        <div>https://jsinterview/api/medium</div>

                        <br></br>

                        <ul className="epItem">Hard</ul>
                        <div>https://jsinterview/api/hard</div>

                        <br></br>
                    </div>

                </div>
            </div>
        )
    }
}

export default Endpoints;
