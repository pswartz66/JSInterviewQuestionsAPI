import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FaAngleDoubleLeft } from 'react-icons/fa';

const LeftNav = () => {



    const pageNames = [
        "Documentation",
        "Endpoints",
        "About",
        "Submit a question"
    ]

    let links = pageNames.map(function (name, index) {
        return (
            <ul key={index} className="sidebar-listitem">
                <Link className="underbar-link" to={`/${name.trim()}`}>{name}</Link>
            </ul>
        )
    })

    return (
        <div className="sidebarContainer">
            <nav id="sidebar">
                <div className="leftArrow">
                    <FaAngleDoubleLeft size={24} />
                </div>
                <div className="sidebar-header">

                    <div id="leftHeader">

                        JS Interview Questions API
                    </div>

                </div>
                <ul className="sidebar-list">
                    {links}
                </ul>
            </nav>
        </div>
    )
}

export default LeftNav;
