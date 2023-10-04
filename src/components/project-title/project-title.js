import * as React from "react";

import c from "classnames";
import PropTypes from "prop-types";

const ProjectTitle = ({
	align,
	title,
	subhead,
	tags,
	durationStart,
	durationEnd,
}) => {
	return (
		<div className={c("project-title viewport", "project-title--" + align)}>
			<div className="container">
				<h2>{title}</h2>
				<small>{subhead}</small>
				<span>
					<ul>
						{tags.map((name) => {
							return (
								<li>
									<small>
										{name}
										{"\u2002"} {"\u00b7"} {"\u2002"}
									</small>
								</li>
							);
						})}
					</ul>
					<small>
						{durationStart}
						{"\u2009"}
						{"\u2e3a"}
						{"\u2009"}
						{durationEnd}
					</small>
				</span>
			</div>
		</div>
	);
};

ProjectTitle.propTypes = {
	align: PropTypes.string,
	title: PropTypes.string.isRequired,
	subhead: PropTypes.string,
	tags: PropTypes.array,
	durationStart: PropTypes.number,
	durationEnd: PropTypes.number,
};

ProjectTitle.defaultProps = {
	align: "left",
};

export default ProjectTitle;
