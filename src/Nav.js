import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const nav = [
	{
		id: 1,
		name: 'Home',
	},
	{
		id: 2,
		name: 'Organizations',
	},
];

const activeClassName = 'selected';

const CustomNavLink = styled(NavLink).attrs({ activeClassName })`
	& {
		color: ghostwhite;
	}
	&:not(:first-child) {
		margin-left: 1em;
	}
	&.${activeClassName} {
		color: pink;
		border-bottom: 1px solid pink;
		padding-bottom: 2px;
		transform: translateY(2px);
	}
`;

const Container = styled.nav`
	display: fixed;
	top: 0;
	left: 0;
	right: 0;
	color: ghostwhite;
	background-color: black;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 1em;
`;

const Nav = () => (
	<Container>
		{nav.map(({ id, name }) => (
			<CustomNavLink key={id} to={`/${name.toLowerCase()}`}>
				{name}
			</CustomNavLink>
		))}
	</Container>
);

export default Nav;
