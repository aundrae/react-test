import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Login from '../Login';
import User from '../User';
import Admin from '../Admin';
import Profile from '../Profile';
const Root = () =>(
  <Router>
    <Route exact path='/' component={Login} />
    <Route path='/user' component={User} />
    <Route path='/admin' component={Admin} />
  </Router>
)

export default Root;