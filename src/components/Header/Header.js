import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
const Header = () => {
    return (
        <>
            <Navbar bg='primary' variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href='/'>React Bootstrap</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#about">
                            About
                        </Nav.Link>
                        <Nav.Link href="#contact">
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Container>

            </Navbar>
        </>
    )
}

export default Header