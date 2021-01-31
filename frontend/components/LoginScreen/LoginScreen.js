import React from 'react';
import './LoginScreen.css'
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Redirect, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';

class loginScreen extends React.Component {
    constructor(props)  {
        super(props)
        this.state = {email: "", password: "", phone_number: "", authentication_sid:  "", token: "", loggedIn: false}
    }

    submit() {
        console.log(this.state)
        let result = axios.post('/users/', {
            email: this.state.email,
            password: this.state.password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({loggedIn: true})

    }

    submitRegister() {
        console.log(this.state)
        let result = axios.post('/register/', {
            phone_number: this.state.phone_number,
            authentication_sid: this.state.authentication_sid,
            token: this.state.token,
            email: this.state.email
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
            <div>
                {this.state.loggedIn ?
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

                           <button className="btn btn-primary btn-block" onClick={() => this.submitRegister()}> Register </button>
                       </Form>
                   </Col>
               </Row>
            </Container>
                
                : 
                <div  className={"LoginScreen"}>
                <Card className={"LoginScreen__card"}>                
                    <Card.Body>                
                        <h1 className={"LoginScreen__card-title"}>SMOPS</h1>
                        <Form className={"LoginScreen__card-form"}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange = {(event) => this.setState({email: event.target.value })}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange = {(event) => this.setState({password: event.target.value })}/>
                            </Form.Group>

                            <button className="btn btn-primary btn-block" onClick={() => this.submit()}> Login </button>
                        </Form>
                    </Card.Body>
                </Card>
                </div>
                }
            </div>
        );
    }
}

export default loginScreen;
