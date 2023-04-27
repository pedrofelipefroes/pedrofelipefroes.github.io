import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";

import { projectFooter, title } from "./project-footer.module.css";

const ProjectFooter = ({ credits, summary }) => (
	<div className={projectFooter}>
		<div className="l-2col l-column-start-2--1366 s-inset-stack-10 u-divider">
			<div className={c(title, "h-100")}>
				<h2 className="title-3 s-stack-2 s-stack-0--768 txt-serif">Summary</h2>
			</div>
			<ul className="list l-stack">
				{summary.map((item) => (
					<li key={item} className="s-stack-2">
						<p className="body d-inline txt-sans-serif">{item}</p>
					</li>
				))}
			</ul>
		</div>
		<div className="l-2col l-column-start-2--1366 s-inset-stack-10">
			<div className={c(title, "h-100")}>
				<h2 className="title-3 s-stack-2 s-stack-0--768 txt-serif">Credits</h2>
			</div>
			<div className="l-stack">
				{credits.map((item, index) => (
					<div
						key={item}
						className={credits.length - 1 === index ? "" : "s-stack-2"}
					>
						<p className="body d-inline txt-sans-serif">{item}</p>
					</div>
				))}
			</div>
		</div>
	</div>
);

ProjectFooter.propTypes = {
	credits: PropTypes.array.isRequired,
	summary: PropTypes.array.isRequired,
};

export default ProjectFooter;
