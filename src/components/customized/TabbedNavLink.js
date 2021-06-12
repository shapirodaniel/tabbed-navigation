import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = 'selected';

const TabbedNavLink = styled(NavLink).attrs({ activeClassName })`
	& {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		width: 100%;
		min-width: 120px;
		margin: 0;
		border-bottom: 1px solid black;
		color: inherit;
	}
	&.${activeClassName} {
		color: blue;
		border: 1px solid black;
		border-bottom: none;
	}
`;

export default TabbedNavLink;
