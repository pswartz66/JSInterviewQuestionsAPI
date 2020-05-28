import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


const LeftNav = () => {

    return (
        <div class="sidebar-container">
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>JS Interview Questions API</h3>
                </div>
                
                <ul class="sidebar-list">
                    <ul class="sidebar-listitem"><Link to="/documentation">Documentation</Link></ul>
                    <ul class="sidebar-listitem"><Link to="/endpoints">Endpoints</Link></ul>
                    <ul class="sidebar-listitem"><Link to="/about">About</Link></ul>
                    <ul class="sidebar-listitem"><Link to="/submitquestion">Submit a question</Link></ul>
                </ul>
            </nav>
        </div>
    )

}

export default LeftNav;
