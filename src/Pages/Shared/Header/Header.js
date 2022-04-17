import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Home/Home/bag4.png';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'


const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky='top' bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home" as={Link} to="/">
            <img height={30} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#treatment">Treatment</Nav.Link>

              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/about">Aboute</Nav.Link>
              {
                user ? 
                        <button className='btn btn-link text-decoration-none text-white fw-bold fs-5' onClick={handleSignOut}>Sign out</button>
                :
                <Nav.Link className='btn btn-link text-decoration-none text-white fw-bold fs-5' eventKey={2} as={Link} to="/login">
                  Login
                </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;