import { projectObj } from '../public-assets/data/projectList';
import { ProjectCard } from '../public-components/projectCard';
const Main = () => {
	return (
		<div className="container-fluid my-bg-theme">
			<div className="row title-row">
				<div className="col text-style-1">Projects</div>
			</div>
			<div className="row projects-row">
				<div className="col-sm-2 col-0"></div>
				<div className="col-sm-8">
					<div className="projects-container">
						{projectObj.map((linkObj, index) => {
							{
								linkObj = Object.values(linkObj)[0];
								console.log(linkObj);
							}
							return <ProjectCard info={linkObj} className="card-card-card" />;
						})}
					</div>
				</div>
				<div className="col-sm-2 col-0"></div>
			</div>
		</div>
	);
};
export default Main;
