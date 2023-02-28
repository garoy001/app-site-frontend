import { useParams } from 'react-router';

const URL = 'https://project-api-9ejh.onrender.com';
export const projectsLoader = async () => {
	const response = await fetch(URL + '/api/');
	const projects = await response.json();
	return projects;
};
export const projectLoader = async ({ params }) => {
	const response = await fetch(URL + '/api/' + params.id + '/');
	const project = await response.json();
	return project;
};
