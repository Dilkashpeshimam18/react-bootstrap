import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Counter = () => {

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col xs={4}>
                        <Card className='shadow-lg'>
                            <Card.Body>
                                <p className='display-6'>Counter</p>
                                <p>0</p>
                                <Button variant='warning' className='m-1'>Increment</Button>
                                <Button variant='success'>Decrement</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Counter