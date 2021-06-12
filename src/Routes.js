import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { Home, Organizations } from './components';

const Routes = () => (
	<Router>
		<Switch>
			<Route path='/home' component={Home} />
			<Route path='/organizations' component={Organizations} />
			<Redirect to='/home' />
		</Switch>
	</Router>
);

export default Routes;
