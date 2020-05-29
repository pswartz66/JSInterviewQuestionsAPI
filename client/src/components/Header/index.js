import React from 'react';
import './style.css';

const Header = (props) => {

    console.log(props);
    return (
        <div className="headerContainer">
            <header className="navBar">
                <div className="pageHeaders">{props.name}</div>
            </header>
        </div>
    )
}

export default Header;