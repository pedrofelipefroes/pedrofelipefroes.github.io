import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";

import {
	Parallax,
	ParallaxBanner,
	ParallaxBannerLayer,
} from "react-scroll-parallax";
import { Link } from "gatsby";
import Button from "../button/button";

import {
	button,
	cover,
	headline,
	info,
	projectSection,
} from "./project-section.module.css";

const ProjectSection = ({ img, imgRotation, subhead, tags, title, url }) => {
	return (
		<div
			className={c(
				projectSection,
				"l-golden-ratio s-stack-10 s-stack-20--1366"
			)}
		>
			<Parallax speed={-4} className={c(headline, "s-stack-3")}>
				<h3 className="title-1">{title}</h3>
			</Parallax>
			<Parallax
				className={cover}
				rotateZ={imgRotation.z}
				scale={[1.164, 1]}
				speed={5}
			>
				<ParallaxBanner>
					<ParallaxBannerLayer image={img} speed={-5} />
				</ParallaxBanner>
			</Parallax>
			<div className={c(info, "w-max-txt")}>
				<div className="d-flex s-stack-1 u-wrap">
					{tags.map((item) => (
						<small
							key={item}
							className="caption tag txt-500 txt-monospace txt-uppercase"
						>
							{item}
						</small>
					))}
				</div>
				<p className="body">{subhead}</p>
			</div>
			<Parallax className={button} speed={-2.5}>
				<Button>
					<Link to={url}>See Case</Link>
				</Button>
			</Parallax>
		</div>
	);
};

ProjectSection.propTypes = {
	img: PropTypes.string.isRequired,
	imgRotation: PropTypes.object.isRequired,
	subhead: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default ProjectSection;
