/* eslint-disable react/display-name */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useTabs } from '../custom-hooks/useTabs';
import TabLink from './customized/TabLink';
import styled from 'styled-components';

const Container = styled.div``;

const NavTabs = styled.nav`
	display: flex;
`;

const TabbedNavigation = ({ tabs }) => {
	const { url, getClassName, setActiveTab } = useTabs(tabs);

	return (
		<Container>
			<NavTabs>
				{tabs.map(({ id, link, name }) => (
					<TabLink
						key={id}
						to={url + link}
						className={getClassName(name)}
						onClick={() => setActiveTab(name)}
					>
						{name}
					</TabLink>
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
