import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";

import { details } from "./project-body.module.css";

const ProjectBody = ({ children, company, subhead, tags, title }) => (
	<div className="l-golden-ratio l-golden-ratio--reverse">
		<div className={c(details, "h-100")}>
			<div className="s-stack-10 s-stack-0--1366">
				<p className="headline headline--dense d-none d-flex--1366 s-stack-2 txt-sans-serif">
					{title}
				</p>
				<div className="d-flex s-stack-2 u-wrap">
					{tags.map((item) => (
						<small
							key={item}
							className="caption tag txt-monospace txt-uppercase"
						>
							{item}
						</small>
					))}
				</div>
				<div className="l-stack">
					<p className="body d-inline s-stack-1 txt-sans-serif">{subhead}</p>
					<p className="body d-inline txt-sans-serif">{company}</p>
				</div>
			</div>
		</div>
		<div>{children}</div>
	</div>
);

ProjectBody.propTypes = {
	children: PropTypes.node.isRequired,
	company: PropTypes.string.isRequired,
	subhead: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired,
};

export default ProjectBody;
