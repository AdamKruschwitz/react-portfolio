import React from 'react';
import { Container } from 'react-bootstrap'

function Footer({}) {
    return (
        <Container fluid className="bg-dark text-light p-4 position-absolute bottom-0">
            <p>
                Made by Adam Kruschwitz with  
                <a href="https://reactjs.org/" class="text-decoration-none"> React</a> and 
                <a href="https://react-bootstrap.netlify.app/" class="text-decoration-none"> React Bootstrap</a>.
            </p>
            <p>
                Source code for this website <a href="https://github.com/AdamKruschwitz/React-Portfolio" class="text-decoration-none">here</a>.
            </p>
        </Container>
    )
}

export default Footer;