import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NewTask from './pages/newTask';
import UpdateTask from './pages/updateTask';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/newTask' component={NewTask} />
                <Route path='/updateTask' component={UpdateTask} />
            </Switch>
        </BrowserRouter>
    )
}

