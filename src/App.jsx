import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from './routes/routes.js';

import { withAuthentication } from './session';

import Home from './screens/Home/index.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
        };
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path={ROUTES.LANDING} component={Home} />
                </div>
            </Router>
        );
    }
}

export default withAuthentication(App);
