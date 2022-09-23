import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";
import {
	Parallax,
	ParallaxBanner,
	ParallaxBannerLayer,
} from "react-scroll-parallax";

import {
	article,
	cover,
	details,
	headline,
	projectBody,
	subhead,
} from "./project-body.module.css";

const ProjectBody = ({ children, data }) => {
	return (
		<div
			className={c(
				projectBody,
				"align-items-start divider grid-golden-ratio grid-golden-ratio--reverse project-page sp-inset-block-end-xl sp-inset-inline"
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
			<section className={details}>
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
				<p className="text-ms-0">{data.company}</p>
			</section>
			<Parallax className={subhead} speed={-5}>
				<p className="text-ms-1">{data.subhead}</p>
			</Parallax>
			<section className={article}>
				<article className="sp-inset-block-end-lg">{children}</article>
				<h2 className="sp-block-end-xs text-ms-1">Summary</h2>
				<ul className="sp-inset-block-end-md text-ms-0">
					{data.summary.map((item) => (
						<li>{item}</li>
					))}
				</ul>
				<h2 className="sp-block-end-xs text-ms-1">Credits</h2>
				<p className="sp-block-end-xxs text-ms-0">{data.role}</p>
				<p className="text-ms-0">{data.team}</p>
			</section>
		</div>
	);
};

ProjectBody.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ProjectBody;
