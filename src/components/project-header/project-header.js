import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";

import { Parallax } from "react-scroll-parallax";

import { projectHeader } from "./project-header.module.css";

const ProjectHeader = ({ title }) => (
	<header className={c(projectHeader, "s-stack-15 s-stack-20--768")}>
		<Parallax speed={-10}>
			<h1 className="large-title txt-align-center txt-serif">{title}</h1>
		</Parallax>
	</header>
);

ProjectHeader.propTypes = {
	title: PropTypes.string.isRequired,
};

export default ProjectHeader;
