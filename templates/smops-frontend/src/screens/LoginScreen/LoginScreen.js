import React from 'react';
import styles from './LoginScreen.module.css'
import { Form, Button, Card } from 'react-bootstrap'

const loginScreen = () => {
    return (
        <div className={styles.wrapper}>
            <Card className={styles.card}>                
                <Card.Body>                
                    <h1 className={styles.title}>SMOPS</h1>

                    <Form className={styles.form}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn-block mt-5">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default loginScreen;