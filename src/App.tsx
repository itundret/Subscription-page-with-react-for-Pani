import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import SubscriptionList from "./components/subscription-list.component";

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                    Home
                </Link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/subscription"} className="nav-link">
                            Subscribe
                        </Link>
                    </li>

                </div>
            </nav>

            <div className="container mt-3">
                <Switch>
                    <Route exact path={["/", "/subscription"]} component={SubscriptionList} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
