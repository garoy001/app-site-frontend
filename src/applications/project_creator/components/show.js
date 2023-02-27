export function Show(props) {
	return (
		<div className="card" style={{ width: '20rem' }}>
			<img className="card-img-top project-preview-pic" src={props.info.img} />
			<div className="card-body project-text-info-container">
				<h5 className="card-title project-title">{props.info.title}</h5>
			</div>

			<div className="card-body project-links-container">
				<a
					className="card-link project-links"
					rel="noopener noreferrer"
					target="_blank"
					href={props.info.livelink}
				>
					Deployed Site
				</a>
				<a
					className="card-link project-links"
					rel="noopener noreferrer"
					target="_blank"
					href={props.info.gitlink}
				>
					Github
				</a>
			</div>
		</div>
	);
}
