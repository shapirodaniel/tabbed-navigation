import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.section`
	& {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 2em;
	}
	& * {
		margin-top: 1em;
	}
`;

const Page = ({ name, src }) => (
	<Container>
		<h2>{name}</h2>
		<img src={src} alt='' height={300} width={300} />
	</Container>
);

export const MyOrgs = () => (
	<Page name={'Organizations'} src={'/assets/photo-1.jpg'} />
);
export const MyProfile = () => (
	<Page name={'Profile'} src={'/assets/photo-2.jpg'} />
);
export const MyProjects = () => (
	<Page name={'Projects'} src={'/assets/photo-3.jpg'} />
);
export const OrgPeople = () => (
	<Page name={'People'} src={'/assets/photo-4.jpg'} />
);
export const OrgProfile = () => (
	<Page name={'Profile'} src={'/assets/photo-5.jpg'} />
);
export const OrgProjects = () => (
	<Page name={'Projects'} src={'/assets/photo-6.jpg'} />
);
