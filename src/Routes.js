import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './components/Login';

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" exact component={Login} />

					<Route path="/platform" component={App} />
				</Switch>
			</Router>
		);
	}
}
