import React from 'react';
// import { Container } from 'react-bootstrap'
import {
        BrowserRouter as Router,
        Routes,
        Route
    } from "react-router-dom";
import Navigation from "../Navigation"
import AboutMe from "../AboutMe"
import Footer from "../Footer"
import Portfolio from "../Portfolio"
// import Contact from "../Contact"

function MyContainer() {
    return (
    <Router >
        <div className="min-vh-100">
        <Navigation />
        <Routes>
            <Route path="/" element={<AboutMe />}>
            </Route>
            <Route path="/about-me" element={<AboutMe />}>
            </Route>
            <Route path="/portfolio" element={<Portfolio />}>
            </Route>
            {/* <Route path="/contact" element={<Contact />}>
            </Route> */}
        </Routes>
        <Footer />
        </div>
    </Router>
    
    )
}

export default MyContainer