import React from 'react';
import styles from './MainScreen.module.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'


class MainScreen extends React.Component {
    constructor(props)  {
        super(props)
        this.state = {phone_number: "", authentication_sid: "", token: ""}
    }

    submit() {
        console.log(this.state)
        let result = axios.post('/register/', {
            phone_number: this.state.phone_number,
            authentication_sid: this.state.authentication_sid,
            token: this.state.token,
            email: this.props.location.state.email
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(result)

    }
    render() {
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
                                <Form.Control type="text" placeholder="Enter Phone Number" onChange = {(event) => this.setState({phone_number: event.target.value })}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicSID">
                                <Form.Label>Account SID</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Twillio-Generated Account SID" onChange = {(event) => this.setState({authentication_sid: event.target.value })}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPhone">
                                <Form.Label>Authentication Token</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Twillio-Generated Authentication Token" onChange = {(event) => this.setState({token: event.target.value })}/>
                            </Form.Group>

                            <button className="btn btn-primary btn-block" onClick={() => this.submit()}> Register </button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default MainScreen;
