import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import App from './App';
import Home from './public-pages/home';
import ProjectHome from './applications/project_creator/pages/projecthome';
import ProjectShow from './applications/project_creator/pages/projectshow';
import { projectLoader, projectsLoader } from './public-utils/loaders';
import {
	createAction,
	updateAction,
	deleteAction,
} from './public-utils/actions';
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Home />} />
			<Route path="project" element={<ProjectHome />} loader={projectsLoader} />
			<Route
				path="project/:id"
				element={<ProjectShow />}
				loader={projectLoader}
			/>
			<Route path="create" action={createAction} />
			<Route path="update/:id" action={updateAction} />
			<Route path="delete/:id" action={deleteAction} />
		</Route>
	)
);

export default router;
