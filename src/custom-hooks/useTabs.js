import { useState, useEffect } from 'react';
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';

export const useTabs = tabs => {
	const { url } = useRouteMatch();

	const [linkName, setLinkName] = useState(tabs[0].name);

	const history = useHistory();

	const { pathname } = useLocation();

	useEffect(() => {
		const newPathname = url + '/' + linkName.toLowerCase();
		history.push(newPathname);
	}, [pathname]);

	return {
		url,
		getClassName: name => {
			return linkName === name ? 'active' : '';
		},
		setActiveLink: name => {
			setLinkName(name);
		},
	};
};
