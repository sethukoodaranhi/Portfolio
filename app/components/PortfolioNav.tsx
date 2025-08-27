'use client';

import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './css/navbar.module.css';
import { Sen } from 'next/font/google';
import Link from "next/link";
const sen = Sen({
    subsets: ['latin'],
    weight: ['400', '700'],
});

function PortfolioNav() {
    return (
        <Navbar expand="md" className={`${styles.portfolioNavbar} ${sen.className}`} sticky="top">
            <Container>
                <Navbar.Brand href="#home" >portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="portfolio-navbar-nav" className={`${styles.toggleIcon}`}/>
                <Navbar.Collapse id="portfolio-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey={"#home"}>
                        <Nav.Link as={Link} href="#home" eventKey="#home">Home</Nav.Link>
                        <Nav.Link as={Link}href="#about" eventKey="#about">About</Nav.Link>
                        <Nav.Link as={Link} href="#skill" eventKey="#skill">Skill</Nav.Link>
                        <Nav.Link as={Link} href="#projects" eventKey="#project">Project</Nav.Link>
                        <Nav.Link as={Link} href="#contact" eventKey="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PortfolioNav;

