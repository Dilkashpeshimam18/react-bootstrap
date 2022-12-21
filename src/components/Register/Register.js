import React, { useState } from 'react'
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleRegister = (e) => {
        e.preventDefault()
        let user = {
            email: email,
            password: password
        }
        console.log(user)
    }
    return (
        <>
            <Container>
                <Row>
                    <Col xs={5}>
                        <Card className='shadow-lg'>
                            <Card.Header className='p-3'>Register</Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleRegister}>
                                    <Form.Group className='m-1 p-2'>
                                        <Form.Label>
                                            Email
                                        </Form.Label>
                                        <Form.Control onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter email'></Form.Control>
                                    </Form.Group>
                                    <Form.Group className='m-1 p-2'>
                                        <Form.Label>
                                            Password
                                        </Form.Label>
                                        <Form.Control onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter password'></Form.Control>
                                    </Form.Group>
                                    <Form.Group className='d-grid gap-2 mt-3'>
                                        <Button type='submit' size='lg'>Register</Button>

                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Register