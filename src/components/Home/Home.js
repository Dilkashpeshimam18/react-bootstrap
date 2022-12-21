import React from 'react'
import Counter from '../Counter/Counter'
import { Col, Container, Row } from 'react-bootstrap'
import Register from '../Register/Register'
const Home = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col xs={4}>
                        <Counter />
                    </Col>
                    <Col >
                        <Register />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home