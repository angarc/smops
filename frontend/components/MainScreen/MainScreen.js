import React from 'react';
import styles from './MainScreen.module.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const MainScreen = () => {
    return (
        <Container className={"MainScreen"}>
            <Row>
                <Col xs={12}>
                    <h1 className={"MainScreen__title"}>
                        Enter in your Twillio information so that we can connect with you on the go!
                    </h1>
                    <Form className={"MainScreen__form"}>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone Number" />
                        </Form.Group>

                        <Form.Group controlId="formBasicSID">
                            <Form.Label>Account SID</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Twillio-Generated Account SID" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Authentication Token</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Twillio-Generated Authentication Token" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="btn-block mt-5">
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};


export default MainScreen;
