import * as React from "react";

import PropTypes from "prop-types";

const ProjectDescription = ({ durationEnd, durationStart, subhead, tags }) => {
	return (
		<>
			<div className="project-description__subhead">
				<small>{subhead}</small>
			</div>
			<div className="project-description__tags">
				<ol>
					{tags.map((item) => {
						return (
							<li key={item}>
								<small>{item}</small>
							</li>
						);
					})}
				</ol>
			</div>
			<div className="project-description__duration">
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
};

export default ProjectDescription;
