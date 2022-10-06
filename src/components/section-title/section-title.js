import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";

import { sectionTitle } from "./section-title.module.css";

const SectionTitle = ({ label, ...other }) => {
	return (
		<div {...other}>
			<h2
				className={c(
					sectionTitle,
					"caption caption--sparse d-inline-flex txt-monospace txt-uppercase"
				)}
			>
				&#35;{label}
			</h2>
		</div>
	);
};

SectionTitle.propTypes = {
	label: PropTypes.string.isRequired,
};

export default SectionTitle;
