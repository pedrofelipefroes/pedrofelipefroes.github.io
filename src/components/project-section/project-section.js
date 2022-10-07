import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";

import { Parallax } from "react-scroll-parallax";
import { Link } from "gatsby";
import Button from "../button/button";

import {
	button,
	headline,
	info,
	projectSection,
} from "./project-section.module.css";

const ProjectSection = ({ subhead, tags, title, url }) => (
	<section
		className={c(
			projectSection,
			"section js-project-section l-golden-ratio s-inline-auto s-inset-inline s-inset-stack-3 s-inset-stack-4--1366 u-align-items-end u-divider w-max-content"
		)}
	>
		<Parallax
			speed={2}
			className={c(headline, "s-stack-5 s-stack-6--992 s-stack-4--1366")}
		>
			<h3 className="title-1 txt-serif">{title}</h3>
		</Parallax>
		<div className={info}>
			<div className="d-flex s-stack-4 u-wrap">
				{tags.map((item) => (
					<small key={item} className="caption tag txt-monospace txt-uppercase">
						{item}
					</small>
				))}
			</div>
			<p className="body d-inline p-relative txt-sans-serif w-max-txt">
				{subhead}
			</p>
			<Parallax className={button} speed={1}>
				<Button>
					<Link to={url}>See Case</Link>
				</Button>
			</Parallax>
		</div>
	</section>
);

ProjectSection.propTypes = {
	subhead: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default ProjectSection;
