import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";
import {
	Parallax,
	ParallaxBanner,
	ParallaxBannerLayer,
} from "react-scroll-parallax";

import Button from "../button/button";

import { cover, info, selectedWork } from "./selected-work.module.css";
import { Link } from "gatsby";

const SelectedWork = ({ description, img, rotation, tags, title, url }) => {
	return (
		<div
			className={c(
				selectedWork,
				"grid-golden-ratio sp-inset-inline sp-block-end-xl"
			)}
		>
			<Parallax speed={-5} className="sp-block-end-sm">
				<h3 className="text-ms-3to4">{title}</h3>
			</Parallax>
			<Parallax rotateX={rotation.x} rotateY={rotation.y} rotateZ={rotation.z}>
				<ParallaxBanner className={cover}>
					<ParallaxBannerLayer image={img} speed={-5} />
				</ParallaxBanner>
			</Parallax>
			<div className={c(info, "justify-self-end w-max-txt")}>
				<div className="sp-block-end-xxs">
					{tags.map((item) => (
						<small
							key={item}
							className="font-500 font-monospace text-ms-1neg text-nowrap text-uppercase"
						>
							{item}
						</small>
					))}
				</div>
				<p className="text-ms-0">{description}</p>
			</div>
			<Parallax className="justify-self-end" speed={-2.5}>
				<Button>
					<Link to={url}>See Case</Link>
				</Button>
			</Parallax>
		</div>
	);
};

SelectedWork.propTypes = {
	description: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	rotation: PropTypes.object.isRequired,
	tags: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default SelectedWork;
