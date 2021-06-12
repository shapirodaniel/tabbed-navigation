import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const CustomNavLink = styled(Link)`
	& {
		color: ghostwhite;
	}
	&:not(:first-child) {
		margin-left: 1em;
	}
	&.active {
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

const Nav = () => {
	// by tracking the active link ourselves with local state, we get more flexibility -- in this case, we need to be able to check the active link to prevent the click from triggering the useEffect call in our useTabs custom hook in tabbed navigation, to squash a render bug
	const [activeLink, setActiveLink] = useState(nav[0].name);

	return (
		<Container>
			{nav.map(({ id, name }) => (
				<CustomNavLink
					key={id}
					to={`/${name.toLowerCase()}`}
					className={activeLink === name ? 'active' : ''}
					onClick={e => {
						if (activeLink === name) {
							e.preventDefault();
							return;
						}
						setActiveLink(name);
					}}
				>
					{name}
				</CustomNavLink>
			))}
		</Container>
	);
};

export default Nav;
