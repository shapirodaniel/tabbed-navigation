import { useState, useEffect } from 'react';
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';

export const useTabs = tabs => {
	// grab url from route props
	const { url } = useRouteMatch();

	// track the active tabbed link and set the default active tabbed link
	const [activeTab, setActiveTab] = useState(tabs[0].name);

	// grab history from route props
	const history = useHistory();

	// grab pathname from route props
	const { pathname } = useLocation();

	// build the new pathname and push it to history
	// this lets us render the first tab
	useEffect(() => {
		const newPathname = url + '/' + activeTab.toLowerCase();
		history.push(newPathname);
		// we only want to trigger new pushes when our pathname changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	// tabbed navigation expects the url, a className setter, and a fn to toggle the active link onclick
	return {
		url,
		getClassName: name => {
			return activeTab === name ? 'active' : '';
		},
		setActiveTab: name => {
			setActiveTab(name);
		},
	};
};
