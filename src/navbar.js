import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import navlogo from './images/navlogo.png';

import './assets/css/nav.css';

export const Navg = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const collapseNot = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark  expand="md" style={props.style}>
        <NavbarBrand href="https://codechefsrm.in" className="mt-1"><img src={navlogo} alt="" height="20" width="110"></img></NavbarBrand>
        <NavbarToggler onClick={toggle}  />
        
        <Collapse isOpen={isOpen} navbar >
          <Nav className="ml-auto d-block d-md-none" navbar>
            <NavItem className="mt-1">
              <NavLink>
              <Link to="/" className="link" onClick={collapseNot} style={{textDecoration:"none"}}  >Home</Link>
              </NavLink>
            </NavItem>
            <NavItem className="mt-1">
              <NavLink>
              <Link to="/registration" className="link" onClick={collapseNot} style={{textDecoration:"none"}} >Register</Link>
              </NavLink>
            </NavItem>
            <NavItem className="mt-1">
              <NavLink>
              <Link to="/tracks" className="link" onClick={collapseNot} style={{textDecoration:"none"}} >Tracks</Link>
              </NavLink>
            </NavItem>
           
            <NavItem className="mt-1">
              <NavLink>
              <Link to="/abhivyakti" className="link" onClick={collapseNot} style={{textDecoration:"none"}} >Abhivyakti</Link>
              </NavLink>
            </NavItem>
           
            <NavItem className="mt-1">
              <NavLink>
              <Link to="/faqs" className="link" onClick={collapseNot} style={{textDecoration:"none"}} >FAQs</Link>
              </NavLink>
            </NavItem>
          </Nav>
          

        </Collapse>
        <div className="d-none d-md-block">
        <Nav className="ml-auto" navbar>
            <NavItem className="mt-1">
              <NavLink>
              <Link to="/" className="link" style={{textDecoration:"none"}}   >Home</Link>
              </NavLink>
            </NavItem>
            <NavItem className="mt-1">
              <NavLink>
              <Link to="/registration" className="link" style={{textDecoration:"none"}}  >Register</Link>
              </NavLink>
            </NavItem>
            <NavItem className="mt-1">
              <NavLink>
              <Link to="/tracks" className="link" style={{textDecoration:"none"}}  >Tracks</Link>
              </NavLink>
            </NavItem>
           
            <NavItem className="mt-1">
              <NavLink>
              <Link to="/abhivyakti" className="link" style={{textDecoration:"none"}}  >Abhivyakti</Link>
              </NavLink>
            </NavItem>
           
            <NavItem className="mt-1">
              <NavLink>
              <Link to="/faqs" className="link" style={{textDecoration:"none"}}  >FAQs</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

