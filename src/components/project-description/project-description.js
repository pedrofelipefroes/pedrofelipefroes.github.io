import * as React from "react";

import PropTypes from "prop-types";

const ProjectDescription = ({
	durationEnd,
	durationStart,
	subhead,
	tags,
	title,
}) => {
	return (
		<>
			<div className="project-description__title">
				<h2 className="label">
					{title.split(" ").map((word) => (
						<span key={word}>{word}</span>
					))}
					{/* <span>{"\u2197"}</span> */}
				</h2>
			</div>
			<div className="project-description__subhead">
				<small>{subhead}</small>
				<ol>
					{tags.map((item, i) => {
						return i === tags.length - 1 ? (
							<li key={title + item}>
								<small>{item}</small>
							</li>
						) : (
							<li key={title + item}>
								<small>
									{item} {"\u00B7"}
								</small>
							</li>
						);
					})}
				</ol>
				<small>
					{durationStart}
					{"\u2009"}
					{"\u2e3a"}
					{"\u2009"}
					{durationEnd}
				</small>
			</div>
		</>
	);
};

ProjectDescription.propTypes = {
	durationEnd: PropTypes.string,
	durationStart: PropTypes.string.isRequired,
	subhead: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired,
};

export default ProjectDescription;
