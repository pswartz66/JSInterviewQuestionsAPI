import React from 'react';
import './style.css';

class Endpoints extends React.Component {
    

    render() {
        
        return (
            <div className="endpointsContainer">
                <div className="endpointsContent">

                    <div className="endpointsTitle">Endpoints:</div>

                    <div className="endpointsTabs">
                        <ul className="epItem">All Questions:</ul>
                        <div>https://jsinterview/api/all</div>

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
