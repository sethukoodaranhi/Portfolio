'use client';

import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './css/navbar.module.css';
import { Sen } from 'next/font/google';

const sen = Sen({
    subsets: ['latin'],
    weight: ['400', '700'],
});

function PortfolioNav() {
    return (
        <Navbar expand="md" className={`${styles.portfolioNavbar} ${sen.className}`} sticky="top">
            <Container>
                <Navbar.Brand href="/">portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="portfolio-navbar-nav" className={`${styles.toggleIcon}`}/>
                <Navbar.Collapse id="portfolio-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/skill">Skill</Nav.Link>
                        <Nav.Link href="/project">Project</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PortfolioNav;

