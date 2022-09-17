import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";
import {
	Parallax,
	ParallaxBanner,
	ParallaxBannerLayer,
} from "react-scroll-parallax";

import { cover, selectedWork } from "./selected-work.module.css";

const SelectedWork = ({ description, img, rotation, tags, title }) => {
	return (
		<div className={c(selectedWork, "sp-inset-inline sp-block-end-xl")}>
			<Parallax speed={-5} className="sp-block-end-sm">
				<h2 className="text-break-word text-hyphenate text-ms-3to4">{title}</h2>
			</Parallax>
			<Parallax rotateY={[0, 360]} rotateZ={rotation}>
				<ParallaxBanner className={cover}>
					<ParallaxBannerLayer image={img} speed={-5} />
				</ParallaxBanner>
			</Parallax>
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
	);
};

SelectedWork.propTypes = {
	description: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	rotation: PropTypes.array.isRequired,
	tags: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired,
};

export default SelectedWork;
