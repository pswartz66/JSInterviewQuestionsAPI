import React from 'react';
import './style.css';

const Overlay = (props) => {
    return (
        <div className="overlay" onClick={props.click} />
    )
}
export default Overlay;


