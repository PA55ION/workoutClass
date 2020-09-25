import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function Header () {
    return (
       <Navbar expand="lg">
           <Navbar.Brand href="home">Workout</Navbar.Brand>
           <Nav variant='tabs'>
               <Nav.Item>
                   <Nav.Link>Browse Content</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                   <Nav.Link>Current</Nav.Link>
               </Nav.Item>
           </Nav>
       </Navbar>
    )
}

export default Header;