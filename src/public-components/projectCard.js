export function ProjectCard(props) {
	return (
		<div className="card" style={{ width: '20rem' }}>
			<img className="card-img-top project-preview-pic" src={props.info.img} />
			<div className="card-body project-text-info-container">
				<h5 className="card-title project-title">{props.info.name}</h5>
				<div className="card-text project-text">
					{props.info.description.short}
				</div>
			</div>
			<div className="card-body project-tech-icons-container">
				{props.info.tech.map((e) => {
					return <img src={e} className="tech-icon" />;
				})}
			</div>
			<div className="card-body project-links-container">
				<a className="card-link project-links">Deployed Site</a>
				<a className="card-link project-links">About</a>
				<a className="card-link project-links">Github</a>
			</div>
		</div>
	);
}
