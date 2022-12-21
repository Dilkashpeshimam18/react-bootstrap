import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(prev => prev + 1)
    }
    const handleDecrement = () => {
        setCount(prev => prev - 1)
    }
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col xs={10}>
                        <Card className='shadow-lg'>
                            <Card.Body>
                                <p className='display-6'>Counter</p>
                                <p>{count}</p>
                                <Button onClick={handleIncrement} variant='warning' className='m-1'>Increment</Button>
                                <Button onClick={handleDecrement} variant='success'>Decrement</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Counter