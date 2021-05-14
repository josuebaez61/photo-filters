import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import Home from '../views/Home/Home';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={ Home } />
                </Switch>
                <Redirect to="/" />
            </div>
        </Router>
    )
}

export default AppRouter
