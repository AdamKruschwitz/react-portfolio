import React from 'react';
import { Container } from 'react-bootstrap'

function Footer() {
    return (
        <Container fluid className="bg-dark text-light p-2 w-100 mt-auto position-absolute bottom-0">
            <p>
                Made by Adam Kruschwitz with  
                <a href="https://reactjs.org/" className="text-decoration-none"> React</a> and 
                <a href="https://react-bootstrap.netlify.app/" className="text-decoration-none"> React Bootstrap</a>.
            </p>
            <p>
                Source code for this website <a href="https://github.com/AdamKruschwitz/React-Portfolio" className="text-decoration-none">here</a>.
            </p>
        </Container>
    )
}

export default Footer;