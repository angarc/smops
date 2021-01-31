import React from 'react';
import './LoginScreen.css'
import { Form, Button, Card} from 'react-bootstrap'
import { Redirect, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';

class loginScreen extends React.Component {
    constructor(props)  {
        super(props)
        this.state = {email: "", password: "", loggedIn: false}
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

    

    render() {
        return (
            <div className={"LoginScreen"}>
                {this.state.loggedIn ?
                            <Redirect  from = "/" to={{
                                pathname: "/main",
                                state: { email: this.state.email }
                            }}/> : null}
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
        );
    }
}

export default loginScreen;
