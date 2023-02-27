import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import App from './App';
import Home from './public-pages/home';
import ProjectHome from './applications/project_creator/pages/projecthome';
import ProjectShow from './applications/project_creator/pages/projectshow';
import { projectLoader, projectsLoader } from './loaders';
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Home />} />
			<Route path="project/" element={<ProjectHome />} loader={projectsLoader}>
				<Route
					path="post/:id"
					element={<ProjectShow />}
					loader={projectLoader}
				/>
				<Route path="create" />
				<Route path="update/:id" />
				<Route path="delete/:id" />
			</Route>
		</Route>
	)
);

export default router;
