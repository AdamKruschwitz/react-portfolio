import React from 'react';
import { Nav, Button } from 'react-bootstrap';

function Navigation({}) {
    return (
        <Nav 
            activeKey="/aboutMe"
            // onSelect=
        >
            <Nav.Item>
                <Nav.Link href="#">Adam Kruschwitz</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Button >Resume</Button>
            </Nav.Item>
        </Nav>
    )
}

export default Navigation;