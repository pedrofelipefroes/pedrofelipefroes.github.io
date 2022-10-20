import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";

import Button from "../button/button";
import { Link } from "gatsby";

import { nextProject } from "./next-project.module.css";

const NextProject = ({ subhead, title, url }) => (
	<div
		className={c(
			nextProject,
			"l-golden-ratio l-golden-ratio--reverse l-overflow-hidden s-inset-inline u-divider"
		)}
	>
		<div className="l-stack">
			<small className="caption s-stack-1 txt-monospace txt-uppercase">
				Next Project
			</small>
			<div className="s-stack-2">
				<p className="body d-inline txt-sans-serif">{subhead}</p>
			</div>
			<Button>
				<Link to={url}>See Case</Link>
			</Button>
		</div>
		<p className="title-1 p-relative txt-align-right txt-serif">{title}</p>
	</div>
);

NextProject.propTypes = {
	subhead: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default NextProject;
