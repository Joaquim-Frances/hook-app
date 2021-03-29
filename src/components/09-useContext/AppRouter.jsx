import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { AboutView } from './AboutView';
import { HomeView } from './HomeView';
import { LoginView } from './LoginView';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={ HomeView } />
                        <Route exact path="/about" component={ AboutView } />
                        <Route exact path="/login" component={ LoginView } />
                        <Redirect to="/" />
                    </Switch> 
                </div>
            </div>
        </Router>


        
    )
}
