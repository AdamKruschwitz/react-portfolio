import React from 'react';
import { Navbar, Container, Nav, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Navigation({}) {
    return (
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand>Adam Kruschwitz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#aboutMe">About Me</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Button href="#resume">Download Resume</Button>
            </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navigation;