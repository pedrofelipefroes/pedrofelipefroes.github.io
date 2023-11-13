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
						<span>{word}</span>
					))}
					<span>{"\u2197"}</span>
				</h2>
			</div>
			<div className="project-description__subhead">
				<small>{subhead}</small>
				<ol>
					{tags.map((item, i) => {
						return i === 0 ? (
							<li key={i}>
								<small>{item}</small>
							</li>
						) : (
							<li key={i}>
								<small>
									{" "}
									{"\u00B7"} {item}
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
	durationEnd: PropTypes.number.isRequired,
	durationStart: PropTypes.number.isRequired,
	subhead: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired,
};

export default ProjectDescription;
