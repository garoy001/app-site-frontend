import { useLoaderData } from 'react-router-dom';
const ProjectShow = () => {
	const projectObj = useLoaderData();
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-2"></div>
				<div className="col-8">
					<div className="row show-existing">
						<div className="col">
							<div className="row show-title">
								<div className="col show-title-text">{projectObj.title}</div>
								<div className="col show-title-icons"></div>
							</div>
							<div className="row show-img">
								<img className="show-preview-pic" src={projectObj.img} />
							</div>
							<div className="row show-links">
								<a
									className="show-project-links"
									rel="noopener noreferrer"
									target="_blank"
									href={projectObj.livelink}
								>
									Deployed Site
								</a>
								<a
									className="show-project-links"
									rel="noopener noreferrer"
									target="_blank"
									href={projectObj.gitlink}
								>
									Github
								</a>
							</div>
						</div>
					</div>
					<div className="row show-update">
						<div className="col"></div>
					</div>
				</div>
				<div className="col-2"></div>
			</div>
		</div>
	);
};
export default ProjectShow;
