import React from 'react';
import './style.css';

const DrawerButton = (props) => {


    return (
        <button className="drawerBtn" onClick={props.click}>
            <div className="btnLine"/>
            <div className="btnLine"/>
            <div className="btnLine"/>
        </button>
    )
}

export default DrawerButton;
