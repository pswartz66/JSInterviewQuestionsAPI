import React from 'react';
import NavigationLinks from '../NavigationLinks';
import { Link } from 'react-router-dom';

const SidePane = (props) => {

    // this is our standard sidePane css class
    let cssSidePane = "sidePane";
    let newcssSidePane = "";
    if (props.show) {
        // if prop passed down as show is true
        // modify cssSidePane to sidePane.open to get the open css effect
        cssSidePane = ["sidePane", "open"];
        newcssSidePane = cssSidePane.join(' ');
        return (
            // dynamic className here
            <nav className={newcssSidePane}>
                <ul className="sideNavItems">
                    {/* <NavigationLinks /> */}
                    <Link className="underbarLink" to="/docs">Docs</Link>
                    <Link className="underbarLink" to="/endpoints">Endpoints</Link>
                    <Link className="underbarLink" to="/about">About</Link>
                    <Link className="underbarLink" to="/submit">Submit</Link>
                </ul>
            </nav>
        )
    } else {
        return (
            <div></div>
        )
    }

    

  
}

export default SidePane;