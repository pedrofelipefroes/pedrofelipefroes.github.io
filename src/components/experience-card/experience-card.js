import * as React from "react";
import PropTypes from "prop-types";

import { experienceCard } from "./experience-card.module.css";

const ExperienceCard = ({ children, company, role }) => {
	return (
		<div className={experienceCard}>
			<h3 className="sp-block-end-xxs text-ms-1">{role}</h3>
			<p className="text-ms-0">{company}</p>
			<p className="text-ms-0">{children}</p>
		</div>
	);
};

ExperienceCard.propTypes = {
	children: PropTypes.node.isRequired,
	company: PropTypes.string,
	role: PropTypes.string.isRequired,
};

export default ExperienceCard;
