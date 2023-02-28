import { TiDeleteOutline } from 'react-icons/ti';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { useState } from 'react';
import { Form } from 'react-router-dom';
export function Show(props) {
	const [isHidden, setIsHidden] = useState('hidden');
	const id = props.objIndex + 1;
	const url = '/project/' + id;
	const handleClick = () => {
		if (isHidden == 'hidden') {
			setIsHidden('');
		} else {
			setIsHidden('hidden');
		}
	};
	return (
		<div className="card" style={{ width: '20rem', overflowY: 'hidden' }}>
			<div className="card-header card-header-icon-container">
				<button
					className="card-header-icon-button"
					onClick={() => {
						handleClick();
					}}
				>
					<HiOutlinePencilAlt
						className="card-header-icon"
						style={{ marginRight: '.5em' }}
					/>
				</button>
				<Form action={`/delete/${id}`} method="post">
					<button className="card-header-icon-button">
						<TiDeleteOutline className="card-header-icon" />
					</button>
				</Form>
			</div>
			<div className={`card-body ${isHidden}`}>
				<Form action={`/update/${id}`} method="post">
					<input
						type="text"
						name="title"
						placeholder="Title"
						defaultValue={props.title}
					/>
					<input
						type="text"
						name="img"
						placeholder="Image URL"
						defaultValue={props.info.img}
					/>
					<input
						type="text"
						name="livelink"
						placeholder="Live URL"
						defaultValue={props.info.livelink}
					/>
					<input
						type="text"
						name="gitlink"
						placeholder="Git URL"
						defaultValue={props.info.gitlink}
					/>
					<button
						onClick={() => {
							handleClick();
						}}
					>
						Update Project
					</button>
				</Form>
			</div>
			<img className="card-img-top project-preview-pic" src={props.info.img} />
			<div className="card-body project-text-info-container">
				<a href={url}>
					<h5 className="card-title project-title">{props.info.title}</h5>
				</a>
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
