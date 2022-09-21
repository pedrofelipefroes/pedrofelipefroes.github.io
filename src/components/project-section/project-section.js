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

import { cover, info, projectSection } from "./project-section.module.css";

const ProjectSection = ({ img, imgRotation, subhead, tags, title, url }) => {
	return (
		<div
			className={c(
				projectSection,
				"grid-golden-ratio sp-inset-inline sp-block-end-xl"
			)}
		>
			<Parallax speed={-5} className="sp-block-end-sm">
				<h3 className="text-ms-3to4">{title}</h3>
			</Parallax>
			<Parallax rotateZ={imgRotation.z} scale={[1.164, 1]} speed={5}>
				<ParallaxBanner className={cover}>
					<ParallaxBannerLayer image={img} speed={-5} />
				</ParallaxBanner>
			</Parallax>
			<div className={c(info, "justify-self-end w-max-txt")}>
				<div className="sp-block-end-xxs">
					{tags.map((item) => (
						<small
							key={item}
							className="font-500 font-monospace tag text-ms-1neg text-uppercase"
						>
							{item}
						</small>
					))}
				</div>
				<p className="text-ms-0">{subhead}</p>
			</div>
			<Parallax className="justify-self-end" speed={-2.5}>
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
