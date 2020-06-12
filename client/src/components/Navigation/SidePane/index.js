import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import JSLogo from '../../../assets/img/jslogo.png';

const SidePane = (props) => {

    // this is our standard sidePane css class
    let cssSidePane = ["sidePane"];
    if (props.show) {
        // if prop passed down as show is true
        // modify cssSidePane to sidePane.open to get the open css effect
        cssSidePane = ["sidePane", "open"];
    }

    return (
        // dynamic className here
        <nav className={cssSidePane.join(" ")}>
            <div className="sidePaneContainer">
                <img src={JSLogo} alt='jslogoSide' />
                <div className="navTitleSide">
                    InterviewAPI
                </div>
                <div className="divider"/>
                <ul className="sideNavItems">
                    <Link onClick={props.click} className="underbarLinkSide" to="/docs">Docs</Link>
                    <Link onClick={props.click} className="underbarLinkSide" to="/endpoints">Endpoints</Link>
                    <Link onClick={props.click} className="underbarLinkSide" to="/about">About</Link>
                    <Link onClick={props.click} className="underbarLinkSide" to="/submit">Submit</Link>
                </ul>
            </div>
        </nav>
    )
}

export default SidePane;