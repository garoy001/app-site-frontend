import { redirect } from 'react-router-dom';
const url = 'https://project-api-9ejh.onrender.com';

export const createAction = async ({ request }) => {
	const formData = await request.formData();

	const newProject = {
		title: formData.get('title'),
		img: formData.get('img'),
		livelink: formData.get('livelink'),
		gitlink: formData.get('gitlink'),
	};

	await fetch(url + '/api/', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newProject),
	});
	return redirect('/project');
};

export const updateAction = async ({ request, params }) => {
	const formData = await request.formData();
	const id = params.id;
	const updatedProject = {
		title: formData.get('title'),
		img: formData.get('img'),
		livelink: formData.get('livelink'),
		gitlink: formData.get('gitlink'),
	};
	await fetch(url + '/api/' + id + '/', {
		method: 'put',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(updatedProject),
	});
	return redirect('/project');
};
export const deleteAction = async ({ params }) => {
	const id = params.id;
	await fetch(url + '/api/' + id + '/', {
		method: 'delete',
	});
	return redirect('/project');
};
