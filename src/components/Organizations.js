import React from 'react';
import { useTabs } from '../custom-hooks/useTabs';
import { orgTabs } from '../tabs';
import TabbedNavigation from './TabbedNavigation';

const Organizations = () => {
	useTabs(orgTabs[0]);

	return (
		<section>
			<div>
				<h2>Organizations</h2>
			</div>
			<div>
				<TabbedNavigation tabs={orgTabs} />
			</div>
		</section>
	);
};

export default Organizations;
