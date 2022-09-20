import * as React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";

import { experienceCard } from "./experience-card.module.css";

const ExperienceCard = ({ children, company, role, ...other }) => {
	return (
		<div {...other}>
			<div className={experienceCard}>
				<Parallax speed={-1.5}>
					<h3 className="sp-block-end-xxs text-ms-1">{role}</h3>
				</Parallax>
				<p className="text-ms-0">{company}</p>
				<p className="text-ms-0">{children}</p>
			</div>
		</div>
	);
};

ExperienceCard.propTypes = {
	children: PropTypes.node.isRequired,
	company: PropTypes.string,
	role: PropTypes.string.isRequired,
};

export default ExperienceCard;
