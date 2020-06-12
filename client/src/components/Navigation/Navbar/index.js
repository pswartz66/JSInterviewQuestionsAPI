import React from 'react';
import './style.css';
import DrawerButton from '../DrawerButton';
import NavigationLinks from '../NavigationLinks';
import JSLogo from '../../../assets/img/jslogo.png';

const Navbar = (props) => {

    return (
        <header className="Navbar">
            <nav className="Navigation">
                <div className="navButton">
                    <DrawerButton click={props.drawerClickHandler} />
                </div>
                <img src={JSLogo} alt='jslogo' />
                <div className="navTitle">
                    InterviewAPI
                </div>
                <NavigationLinks />
            </nav>

        </header>
    )
}

export default Navbar;