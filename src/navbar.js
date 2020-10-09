import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import navlogo from './images/navlogo.png';

import './assets/css/nav.css';

export const Navg = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const collapseNot = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark fixed="top" expand="md" style={props.style}>
        <NavbarBrand href="https://codechefsrm.in" className="mt-1"><img src={navlogo} alt="" height="20" width="110"></img></NavbarBrand>
        
        <NavbarToggler onClick={toggle}/>
        
        <Collapse isOpen={isOpen} navbar >
          <Nav className="ml-auto d-block d-md-none" navbar>
            <NavItem className="mt-1">
              
              <Link to="/" className="link mx-3 my-2" onClick={collapseNot} style={{textDecoration:"none"}}  >Home</Link>
              
            </NavItem>
            <NavItem className="mt-1">
              
              <Link to="/registration" className="link mx-3 my-2" onClick={collapseNot} style={{textDecoration:"none"}} >Register</Link>
              
            </NavItem>
            <NavItem className="mt-1">
              
              <Link to="/tracks" className="link mx-3 my-2" onClick={collapseNot} style={{textDecoration:"none"}} >Tracks</Link>
              
            </NavItem>
           
            <NavItem className="mt-1">
              
              <Link to="/abhivyakti" className="link mx-3 my-2" onClick={collapseNot} style={{textDecoration:"none"}} >Abhivyakti</Link>
              
            </NavItem>
           
            <NavItem className="mt-1">
              
              <Link to="/faqs" className="link mx-3 my-2" onClick={collapseNot} style={{textDecoration:"none"}} >FAQs</Link>
              
            </NavItem>
          </Nav>
          

        </Collapse>
        <div className="d-none d-md-block">
        <Nav className="ml-auto" navbar>
            <NavItem className="mt-1">
              
              <Link to="/" className="link mx-3 my-2" style={{textDecoration:"none"}}   >Home</Link>
              
            </NavItem>
            <NavItem className="mt-1">
              
              <Link to="/registration" className="link mx-3 my-2" style={{textDecoration:"none"}}  >Register</Link>
              
            </NavItem>
            <NavItem className="mt-1">
              
              <Link to="/tracks" className="link mx-3 my-2" style={{textDecoration:"none"}}  >Tracks</Link>
              
            </NavItem>
           
            <NavItem className="mt-1">
              
              <Link to="/abhivyakti" className="link mx-3 my-2" style={{textDecoration:"none"}}  >Abhivyakti</Link>
              
            </NavItem>
           
            <NavItem className="mt-1">
              
              <Link to="/faqs" className="link mx-3 my-2" style={{textDecoration:"none"}}  >FAQs</Link>
              
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

