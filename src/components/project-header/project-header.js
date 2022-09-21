import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";
import {
	Parallax,
	ParallaxBanner,
	ParallaxBannerLayer,
} from "react-scroll-parallax";

import {
	cover,
	details,
	headline,
	projectHeader,
	subhead,
} from "./project-header.module.css";

const ProjectHeader = ({ data }) => {
	return (
		<section
			className={c(
				projectHeader,
				"align-items-start grid-golden-ratio grid-golden-ratio--reverse project-page sp-inset-inline sp-inset-block-end-md"
			)}
		>
			<Parallax
				className={cover}
				rotateZ={data.imgRotation.z}
				scale={[1.164, 1]}
				speed={10}
			>
				<ParallaxBanner>
					<ParallaxBannerLayer image={data.img} speed={-5} />
				</ParallaxBanner>
			</Parallax>
			<Parallax className={headline} speed={-10}>
				<h1 className="text-break-word text-hyphenate text-ms-3to4 text-ms-3to4--to-6">
					{data.title}
				</h1>
			</Parallax>
			<div className={details}>
				<p className="text-ms-1">{data.title}</p>
				<div className="sp-block-end-xs">
					{data.tags.map((item) => (
						<small
							key={item}
							className="font-500 font-monospace tag text-ms-1neg text-nowrap text-uppercase"
						>
							{item}
						</small>
					))}
				</div>
				<p className="text-ms-0">{data.credit}</p>
			</div>
			<Parallax className={subhead} speed={-5}>
				<h2 className="text-ms-1 w-max-txt">{data.subhead}</h2>
			</Parallax>
		</section>
	);
};

ProjectHeader.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ProjectHeader;
