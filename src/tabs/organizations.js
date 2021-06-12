import { OrgPeople, OrgProjects, OrgProfile } from '../components/tabViews';

export const orgTabs = [
	{
		id: 1,
		name: 'People',
		link: '/people',
		// render function supplies render prop on Route
		component: OrgPeople,
	},
	{
		id: 2,
		name: 'Projects',
		link: '/projects',
		component: OrgProjects,
	},
	{
		id: 3,
		name: 'Profile',
		link: '/profile',
		component: OrgProfile,
	},
];
