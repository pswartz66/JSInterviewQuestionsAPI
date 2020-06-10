import React from 'react';
import './style.css';
import LeftNav from '../LeftNav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import JSLogo from '../../../src/assets/img/jslogo.png';



const Header = (props) => {
  console.log(props);
  return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="jslogo"
            src={JSLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Interview API
        </Navbar.Brand>

        
      </Navbar>


    </div>
  )
}

export default Header;