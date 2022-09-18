import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";

import { sectionTitle } from "./section-title.module.css";

const SectionTitle = ({ label, spEnd, spStart }) => {
	return (
		<Parallax opacity={[1, 0]}>
			<h2
				className={c(
					sectionTitle,
					"font-monospace sp-inset-inline text-ms-0 text-uppercase",
					`sp-block-end-${spEnd}`,
					`sp-block-start-${spStart}`
				)}
			>
				{label}
			</h2>
		</Parallax>
	);
};

SectionTitle.propTypes = {
	label: PropTypes.string.isRequired,
	spEnd: PropTypes.string,
	spStart: PropTypes.string,
};

SectionTitle.defaultProps = {
	spEnd: "md",
	spStart: "lg",
};

export default SectionTitle;
