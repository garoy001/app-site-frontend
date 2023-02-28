import { useLoaderData } from 'react-router-dom';
const ProjectShow = () => {
	const projectObj = useLoaderData();
	return (
		<div className="container-fluid project-show">
			<div className="row show-row-wrapper">
				<div className="col-2"></div>
				<div className="col-8">
					<div className="row show-existing">
						<div className="col-12">
							<div className="row show-row-title ">
								<div className="col-1">
									<a className="back-button" href="/project">
										<p>Back</p>
									</a>
								</div>
								<div className="col-2"></div>
								<div className="col-6 show-title-text">{projectObj.title}</div>
								<div className="col show-title-icons"></div>
							</div>
							<div className="row show-img show-row-image">
								<div className="col-3"></div>
								<div className="col-6">
									<img className="show-preview-pic" src={projectObj.img} />
								</div>
								<div className="col-3"></div>
							</div>
							<div className="row show-row-links">
								<div className="col-4"></div>
								<div className="col-4 show-link-container">
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
