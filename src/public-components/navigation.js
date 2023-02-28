import { BiHome } from 'react-icons/bi';

import { Form } from 'react-router-dom';
const Navigation = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{}}>
			<a
				rel="noopener noreferrer"
				className="navbar-brand"
				href="https://dev.gabrielroyce.com"
				style={{ display: 'flex', alignItems: 'center' }}
			>
				<div
					className="back-arrow"
					style={{ fontSize: '2rem', display: 'flex', alignItems: 'center' }}
				>
					<BiHome />
				</div>
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li
						className="nav-item dropdown active"
						style={{ marginLeft: '10vw' }}
					>
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Projects <span className="sr-only">(current)</span>
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">
								CETAMD
							</a>
							<a className="dropdown-item" href="#">
								Food-App
							</a>
							<a className="dropdown-item" href="/project">
								Project Creator
							</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">
								All Projects
							</a>
						</div>
					</li>
					<li
						className="nav-item dropdown active"
						style={{ marginLeft: '10vw' }}
					>
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Add Project <span className="sr-only">(current)</span>
						</a>
						<div
							className="dropdown-menu create-project-dropdown"
							aria-labelledby="navbarDropdown"
						>
							<Form action="/create" method="post">
								<input type="text" name="title" placeholder="Title" />
								<input type="text" name="img" placeholder="Image URL" />
								<input type="text" name="livelink" placeholder="Live URL" />
								<input type="text" name="gitlink" placeholder="Git URL" />

								<div className="dropdown-divider"></div>
								<button>Create New Project</button>
							</Form>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default Navigation;
