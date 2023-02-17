import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

const Navigation = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a
				rel="noopener noreferrer"
				className="navbar-brand"
				href="https://dev.gabrielroyce.com"
			>
				<div className="back-arrow">
					<BsFillArrowLeftSquareFill />
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
					<li className="nav-item active">
						<a className="nav-link" href="https://dev.gabrielroyce.com">
							Main <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Projects
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">
								CETAMD
							</a>
							<a className="dropdown-item" href="#">
								Food-App
							</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">
								All Projects
							</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default Navigation;
