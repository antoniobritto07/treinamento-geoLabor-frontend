import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import newTask from './pages/newTask';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/newTask' component={newTask} />
            </Switch>
        </BrowserRouter>
    )
}

