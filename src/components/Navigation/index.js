import React from 'react';
import { Navbar, Container, Nav, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Navigation() {
    return (
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand>Adam Kruschwitz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to="/about-me"><Nav.Link as="a">About Me</Nav.Link></Link>
                <Link to="/portfolio"><Nav.Link as="a">Portfolio</Nav.Link></Link>
                <Link to="/contact"><Nav.Link as="a">Contact</Nav.Link> </Link>
                <Button href="#resume">Download Resume</Button>
            </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navigation;