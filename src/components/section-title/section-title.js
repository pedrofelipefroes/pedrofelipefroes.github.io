import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";

import { Parallax } from "react-scroll-parallax";

import { sectionTitle } from "./section-title.module.css";

const SectionTitle = ({ label, ...other }) => {
	return (
		<Parallax opacity={[0.5, 0]} {...other}>
			<h2
				className={c(sectionTitle, "body d-flex txt-monospace txt-uppercase")}
			>
				&#35;{label}
			</h2>
		</Parallax>
	);
};

SectionTitle.propTypes = {
	label: PropTypes.string.isRequired,
};

export default SectionTitle;
