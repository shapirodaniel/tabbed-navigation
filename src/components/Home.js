import React from 'react';
import { useTabs } from '../custom-hooks/useTabs';
import { homeTabs } from '../tabs';
import TabbedNavigation from './TabbedNavigation';

const Home = () => {
	useTabs(homeTabs[0]);

	return (
		<section>
			<div>
				<h2>Home</h2>
			</div>
			<div>
				<TabbedNavigation tabs={homeTabs} />
			</div>
		</section>
	);
};

export default Home;
