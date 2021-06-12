import React from 'react';
import { homeTabs } from '../tabs';
import TabbedNavigation from './TabbedNavigation';

const Home = () => (
	<section>
		<div>
			<h2>Home</h2>
		</div>
		<div>
			<TabbedNavigation tabs={homeTabs} />
		</div>
	</section>
);

export default Home;
