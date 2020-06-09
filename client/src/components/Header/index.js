import React from 'react';
import './style.css';
import LeftNav from '../LeftNav';

const Header = (props) => {
    console.log(props);
    return (
        <div className="headerContainer">
            <header className="navBar">

                <LeftNav />

            </header>

            <div className="pageHeaders">
                {props.name}
            </div>

        </div>
    )
}

export default Header;