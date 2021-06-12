/* eslint-disable react/display-name */
import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import TabbedNavLink from './customized/TabbedNavLink';
import styled from 'styled-components';

const Container = styled.div``;

const NavTabs = styled.nav`
	display: flex;
`;

const TabbedNavigation = ({ tabs }) => {
	const { url } = useRouteMatch();

	return (
		<Container>
			<NavTabs>
				{tabs.map(({ id, link, name }) => (
					<TabbedNavLink key={id} to={url + link}>
						{name}
					</TabbedNavLink>
				))}
			</NavTabs>
			<Switch>
				{tabs.map(({ id, link, component }) => (
					<Route key={id} path={url + link} component={component} />
				))}
			</Switch>
		</Container>
	);
};

export default TabbedNavigation;
