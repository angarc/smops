import React from 'react';
import './LoginScreen.css'
import { Form, Button, Card} from 'react-bootstrap'
import { Link} from 'react-router-dom';

const loginScreen = () => {
    return (
        <div className={"LoginScreen"}>
            <Card className={"LoginScreen__card"}>                
                <Card.Body>                
                    <h1 className={"LoginScreen__card-title"}>SMOPS</h1>

                    <Form className={"LoginScreen__card-form"}>
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

                        <Link to={"/main"} className="btn btn-primary btn-block"> Login </Link>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default loginScreen;