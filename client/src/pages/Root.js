import React from 'react';
import LeftNav from '../components/LeftNav';
import './Root.css';
import { Link } from 'react-router-dom';
import { FaAngleDoubleLeft } from 'react-icons/fa';


class Root extends React.Component {
    constructor() {
        super();
        this.state = {
            style: "sideNav",
            status: "open"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        if (this.state.status === "open") {
            this.setState({
                status: "close",
                style: "sideNav active"
            });
        } else {
            this.setState({
                status: "open",
                style: "sideNav"
            });
        }

        console.log(this.state.status);
    }

    render() {

        const pageName = [
            "Documentation",
            "Endpoints",
            "About",
            "Submit a question"
        ]

        const links = pageName.map(function (name, index) {
            return (
                <ul key={index} className="sideNav-listitem">
                    <Link className="underbar-link" to={`/${name.trim()}`}>{name}</Link>
                </ul>
            )
        })

        return (
            <div>
                <div className="leftNavArrow">
                    <FaAngleDoubleLeft onClick={this.handleClick} size={24} />
                </div>
                <div className={this.state.style}>
                    <div className="sideNav-header">
                        <div id="leftNavHeader">
                            JS Interview Questions API
                        </div>
                    </div>
                    <ul className="sideNav-list">
                        {links}
                    </ul>
                </div>
            </div>
        )
    }
};

export default Root;    