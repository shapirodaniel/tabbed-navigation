import { MyOrgs, MyProjects, MyProfile } from '../components/tabViews';

export const homeTabs = [
	{
		id: 1,
		name: 'Organizations',
		link: '/organizations',
		component: MyOrgs,
	},
	{
		id: 2,
		name: 'Projects',
		link: '/projects',
		component: MyProjects,
	},
	{
		id: 3,
		name: 'Profile',
		link: '/profile',
		component: MyProfile,
	},
];
