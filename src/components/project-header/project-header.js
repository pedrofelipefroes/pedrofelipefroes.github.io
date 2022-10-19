import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";

import { projectHeader } from "./project-header.module.css";

const ProjectHeader = ({ title }) => (
	<header className={c(projectHeader, "s-stack-10 s-stack-20--768")}>
		<h1 className="large-title txt-align-center txt-serif">{title}</h1>
	</header>
);

ProjectHeader.propTypes = {
	title: PropTypes.string.isRequired,
};

export default ProjectHeader;
