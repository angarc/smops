import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginScreen from './LoginScreen/LoginScreen';
import MainScreen from './MainScreen/MainScreen';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={LoginScreen} />
                    <Route exact path='/main' component={MainScreen} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

ReactDom.render(<App />, document.getElementById('app'));
