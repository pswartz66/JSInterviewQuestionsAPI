import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavigationLinks = () => {

    return (
        <ul className="NavLinks">
            <Link className="underbarLink" to="/docs">Docs</Link>
            <Link className="underbarLink" to="/endpoints">Endpoints</Link>
            <Link className="underbarLink" to="/about">About</Link>
            <Link className="underbarLink" to="/submit">Submit</Link>
        </ul>
    )
}

export default NavigationLinks;