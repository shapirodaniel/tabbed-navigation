import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Nav from './Nav';
import { Home, Organizations } from './components';

const App = () => (
	<div>
		<Router>
			<Nav />
			<Switch>
				<Route path='/home' component={Home} />
				<Route path='/organizations' component={Organizations} />
				<Redirect to='/home' />
			</Switch>
		</Router>
	</div>
);

export default App;
