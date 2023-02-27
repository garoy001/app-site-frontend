import { Show } from '../components/show';
import { useLoaderData } from 'react-router-dom';
const ProjectHome = (props) => {
	const projectObj = useLoaderData();
	return (
		<div className="container-fluid my-bg-theme">
			<div className="row title-row">
				<div className="col text-style-1">hello</div>
			</div>
			<div className="row projects-row">
				<div className="col-sm-2 col-0"></div>
				<div className="col-sm-8">
					<div className="projects-container">
						{projectObj.map((linkObj, index) => {
							{
								console.log(projectObj);
							}
							return (
								<Show info={projectObj[index]} className="card-card-card" />
							);
						})}
					</div>
				</div>
				<div className="col-sm-2 col-0"></div>
			</div>
		</div>
	);
};
export default ProjectHome;
