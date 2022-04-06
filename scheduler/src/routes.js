import React from 'react';
import { BrowserRouter, Switch, Route, } from "react-router-dom";

import Login from './pages/Login/login.js'
import Dashboard from './pages/Dashboard'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}

