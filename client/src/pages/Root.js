import React from 'react';
import LeftNav from '../components/LeftNav';
import './Root.css';
import { Link } from 'react-router-dom';


class Root extends React.Component {

    render() {

        return (
            <div>
                <LeftNav />
            </div>
        )
    }
};

export default Root;    