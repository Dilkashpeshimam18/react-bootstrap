import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
const Header = () => {
    return (
        <>
            <Navbar bg='success' variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href='/'>React Bootstrap</Navbar.Brand>
                </Container>

            </Navbar>
        </>
    )
}

export default Header