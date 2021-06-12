import React from 'react';
import { orgTabs } from '../tabs';
import TabbedNavigation from './TabbedNavigation';

const Organizations = () => (
	<section>
		<div>
			<h2>Organizations</h2>
		</div>
		<div>
			<TabbedNavigation tabs={orgTabs} />
		</div>
	</section>
);

export default Organizations;
