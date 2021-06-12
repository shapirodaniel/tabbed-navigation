import { useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

export const useTabs = ({ link }) => {
	const { url } = useRouteMatch();
	const history = useHistory();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => history.push(url + link), [history]);
};
