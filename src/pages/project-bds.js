import * as React from "react";

import Layout from "../components/layout/layout";
import Seo from "../components/seo/seo";
import ProjectHeader from "../components/project-header/project-header";
import ProjectBody from "../components/project-body/project-body";
import ProjectFooter from "../components/project-footer/project-footer";

import { getProject } from "../../project-data";
import NextProject from "../components/next-project/next-project";

const ProjectBDSPage = () => (
	<Layout>
		<Seo title={getProject("bds").title} />
		<article className="article p-relative s-inset-inline u-divider">
			<ProjectHeader title={getProject("bds").title} />
			<ProjectBody
				company={getProject("bds").company}
				subhead={getProject("bds").subhead}
				tags={getProject("bds").tags}
				title={getProject("bds").title}
			>
				<div className="s-stack-10 txt-1to3-col">
					<p className="body txt-sans-serif">
						<span className="dropcap txt-serif">P</span>ostclick is a San
						Francisco-based startup leading the charge to revolutionize digital
						advertising. Postclick sought to create a dynamic landing page
						design system, continuously improving with machine learning to
						reduce client advertising costs and grow&nbsp;conversions.
					</p>
					<p className="body txt-sans-serif">
						The initial project scope involved the design of 400+ different
						blocks: landing page sections such as hero, testimonials, and
						product galleries. However, through research and POCs during our
						discovery stage, we reduced this scope from 400 to only 18. These 18
						blocks were able to interchange styling to test which ones led to
						better conversion rates. A single block had multiple outputs for
						each styling property, such as light/dark modes, sharp/strong
						radiuses, and left/right&nbsp;positioning.
					</p>
					<p className="body txt-sans-serif">
						Challenges along the way included technology constraints and how
						freely clients should be able to customize the system. After going
						through users' feedback, we kicked off the development of an
						improved system version: this time, rooted in Atomic Design, more
						interchangeable styling properties, and a better tech stack with
						React and&nbsp;TailwindCSS.
					</p>
					<p className="body txt-sans-serif">
						We shipped landing pages with a 16% conversion rate and a 56%
						average conversion rate lift using the initial version of our Block
						Design System, with four billion+ unique visitors served. Three
						million+ post-click experiences were created, with 500 million+
						conversions&nbsp;earned.
					</p>
				</div>
				<div className="l-2col s-inset-stack-8">
					<div>
						<small className="caption txt-monospace txt-uppercase">
							Stage 1
						</small>
						<h3 className="headline headline--dense">Discovery</h3>
					</div>
					<div>
						<p className="body d-inline txt-sans-serif">
							Understand the problem, develop POCs, and work with Machine
							Learning and Data Science teams to explore how to classify and
							store block&nbsp;information.
						</p>
					</div>
				</div>
				<div className="l-2col s-inset-stack-8">
					<div>
						<small className="caption txt-monospace txt-uppercase">
							Stage 2
						</small>
						<h3 className="headline headline--dense">Define</h3>
					</div>
					<div>
						<p className="body d-inline txt-sans-serif">
							Reduce scope from 400 to 18 blocks, capitalizing on styling
							interchangeability to deliver multiple visual outputs from a
							single&nbsp;block.
						</p>
					</div>
				</div>
				<div className="l-2col s-inset-stack-8">
					<div>
						<small className="caption txt-monospace txt-uppercase">
							Stage 3
						</small>
						<h3 className="headline headline--dense">Develop</h3>
					</div>
					<div>
						<p className="body d-inline txt-sans-serif">
							Designing and developing blocks, as well as platform tools to
							control block styling, versioning, and page&nbsp;layout.
						</p>
					</div>
				</div>
				<div className="l-2col s-inset-stack-8">
					<div>
						<small className="caption txt-monospace txt-uppercase">
							Stage 4
						</small>
						<h3 className="headline headline--dense">Deploy</h3>
					</div>
					<div>
						<p className="body d-inline txt-sans-serif">
							Make blocks available to create experiences and gather users'
							feedback, leading to the development of the 2nd version of
							the&nbsp;system.
						</p>
					</div>
				</div>
				<ProjectFooter
					credits={getProject("bds").credits}
					summary={getProject("bds").summary}
				/>
			</ProjectBody>
		</article>
		<NextProject
			subhead={getProject("acr").subhead}
			title={getProject("acr").title}
			url={getProject("acr").url}
		/>
	</Layout>
);

export default ProjectBDSPage;

// import * as React from "react";
// import {
// 	Parallax,
// 	ParallaxBanner,
// 	ParallaxBannerLayer,
// } from "react-scroll-parallax";
// import { StaticImage } from "gatsby-plugin-image";

// import Layout from "../components/layout/layout";
// import Seo from "../components/seo/seo";
// import ProjectBody from "../components/project-body/project-body";
// import ProjectProcess from "../components/project-process/project-process";
// import Contact from "../components/contact/contact";

// import { getProject } from "../../project-data";

// import img1__1 from "../images/projects/bds/1__1.png";
// import img1__2 from "../images/projects/bds/1__2.png";
// import img1__3 from "../images/projects/bds/1__3.png";
// import img1__4 from "../images/projects/bds/1__4.png";
// import img1__5 from "../images/projects/bds/1__5.png";
// import img1__6 from "../images/projects/bds/1__6.png";
// import img1 from "../images/projects/bds/1.jpg";
// import img2 from "../images/projects/bds/2.jpg";
// import img3 from "../images/projects/bds/3.jpg";
// import img4 from "../images/projects/bds/4.jpg";

// const ProjectBDSPage = () => (
// 	<Layout>
// 		<p>Project BDS</p>
// 		<Seo title={getProject("bds").title} />
// 		<ProjectBody data={getProject("bds")}>
// 			<div className="sp-block-end-lg text-1to3-col">
// 				<p className="body">
// 					<span className="dropcap">P</span>ostclick is a San Francisco-based
// 					startup leading the charge to revolutionize digital advertising.
// 					Postclick sought to create a dynamic landing page design system,
// 					continuously improving with machine learning to reduce client
// 					advertising costs and grow&nbsp;conversions.
// 				</p>
// 				<p className="body">
// 					The initial project scope involved the design of 400+ different
// 					blocks: landing page sections such as hero, testimonials, and product
// 					galleries. However, through research and POCs during our discovery
// 					stage, we reduced this scope from 400 to only 18. These 18 blocks were
// 					able to interchange styling to test which ones led to better
// 					conversion rates. A single block had multiple outputs for each styling
// 					property, such as light/dark modes, sharp/strong radiuses, and
// 					left/right&nbsp;positioning.
// 				</p>
// 				<p className="body">
// 					Challenges along the way included technology constraints and how
// 					freely clients should be able to customize the system. After going
// 					through users' feedback, we kicked off the development of an improved
// 					system version: this time, rooted in Atomic Design, more
// 					interchangeable styling properties, and a better tech stack with React
// 					and&nbsp;TailwindCSS.
// 				</p>
// 				<p className="body">
// 					We shipped landing pages with a 16% conversion rate and a 56% average
// 					conversion rate lift using the initial version of our Block Design
// 					System, with four billion+ unique visitors served. Three million+
// 					post-click experiences were created, with 500 million+
// 					conversions&nbsp;earned.
// 				</p>
// 			</div>
// 			<ProjectProcess process={getProject("bds").process} />
// 			<figure className="img-full sp-block-end-xl">
// 				<ParallaxBanner
// 					style={{ aspectRatio: "16 / 9", backgroundColor: "#141414" }}
// 				>
// 					<ParallaxBannerLayer speed={-1} style={{}}>
// 						<StaticImage
// 							src={"../images/projects/bds/1__1.png"}
// 							alt="teste"
// 							formats={["auto", "webp", "avif"]}
// 							layout="fullWidth"
// 							loading="eager"
// 							quality={100}
// 							width={1000}
// 						/>
// 					</ParallaxBannerLayer>
// 					<ParallaxBannerLayer speed={-3} style={{}}>
// 						<StaticImage
// 							src={"../images/projects/bds/1__2.png"}
// 							alt="teste"
// 							formats={["auto", "webp", "avif"]}
// 							layout="fullWidth"
// 							loading="eager"
// 							quality={100}
// 							width={1000}
// 						/>
// 					</ParallaxBannerLayer>
// 					<ParallaxBannerLayer speed={-5} style={{}}>
// 						<StaticImage
// 							src={"../images/projects/bds/1__3.png"}
// 							alt="teste"
// 							formats={["auto", "webp", "avif"]}
// 							layout="fullWidth"
// 							loading="eager"
// 							quality={100}
// 							width={1000}
// 						/>
// 					</ParallaxBannerLayer>
// 					<ParallaxBannerLayer speed={-8} style={{}}>
// 						<StaticImage
// 							src={"../images/projects/bds/1__4.png"}
// 							alt="teste"
// 							formats={["auto", "webp", "avif"]}
// 							layout="fullWidth"
// 							loading="eager"
// 							quality={100}
// 							width={1000}
// 						/>
// 					</ParallaxBannerLayer>
// 					<ParallaxBannerLayer speed={-13} style={{}}>
// 						<StaticImage
// 							src={"../images/projects/bds/1__5.png"}
// 							alt="teste"
// 							formats={["auto", "webp", "avif"]}
// 							layout="fullWidth"
// 							loading="eager"
// 							quality={100}
// 							width={1000}
// 						/>
// 					</ParallaxBannerLayer>
// 					<ParallaxBannerLayer speed={-21} style={{}}>
// 						<StaticImage
// 							src={"../images/projects/bds/1__6.png"}
// 							alt="teste"
// 							formats={["auto", "webp", "avif"]}
// 							layout="fullWidth"
// 							loading="eager"
// 							quality={100}
// 							width={1000}
// 						/>
// 					</ParallaxBannerLayer>
// 				</ParallaxBanner>
// 			</figure>
// 			<figure className="align-items-center l-golden-ratio l-golden-ratio l-golden-ratio--reverse">
// 				<figcaption className="sp-block-end-lg text-img-caption caption">
// 					<Parallax speed={-21}>
// 						<small className="s-stack-1">
// 							In the project's early stages, we did multiple presentations to
// 							communicate findings and discuss them in an open-house forum.
// 						</small>
// 						<small>
// 							Fun fact: in a company all hands meeting, Lady Gaga was a metaphor
// 							for how <span className="text-smcps">CSS</span> stylesheets would
// 							work to interchange between styling on a landing page.
// 						</small>
// 					</Parallax>
// 				</figcaption>
// 				<div className="grid-img grid-img--2">
// 					<StaticImage
// 						src={"../images/projects/bds/1.jpg"}
// 						alt="Froes handwritten signature in black."
// 						aspectRatio={16 / 9}
// 						formats={["auto", "webp", "avif"]}
// 						layout="fullWidth"
// 						loading="eager"
// 						quality={100}
// 						width={1000}
// 					/>
// 					<StaticImage
// 						src={"../images/projects/bds/1.jpg"}
// 						alt="Froes handwritten signature in black."
// 						aspectRatio={16 / 9}
// 						formats={["auto", "webp", "avif"]}
// 						layout="fullWidth"
// 						loading="eager"
// 						quality={100}
// 						width={1000}
// 					/>
// 					<StaticImage
// 						src={"../images/projects/bds/1.jpg"}
// 						alt="Froes handwritten signature in black."
// 						aspectRatio={16 / 9}
// 						formats={["auto", "webp", "avif"]}
// 						layout="fullWidth"
// 						loading="eager"
// 						quality={100}
// 						width={1000}
// 					/>
// 					<StaticImage
// 						src={"../images/projects/bds/1.jpg"}
// 						alt="Froes handwritten signature in black."
// 						aspectRatio={16 / 9}
// 						formats={["auto", "webp", "avif"]}
// 						layout="fullWidth"
// 						loading="eager"
// 						quality={100}
// 						width={1000}
// 					/>
// 					<StaticImage
// 						src={"../images/projects/bds/1.jpg"}
// 						alt="Froes handwritten signature in black."
// 						aspectRatio={16 / 9}
// 						formats={["auto", "webp", "avif"]}
// 						layout="fullWidth"
// 						loading="eager"
// 						quality={100}
// 						width={1000}
// 					/>
// 					<StaticImage
// 						src={"../images/projects/bds/1.jpg"}
// 						alt="Froes handwritten signature in black."
// 						aspectRatio={16 / 9}
// 						formats={["auto", "webp", "avif"]}
// 						layout="fullWidth"
// 						loading="eager"
// 						quality={100}
// 						width={1000}
// 					/>
// 				</div>
// 			</figure>
// 			<ParallaxBanner className="aspect-16-9 s-stack-3">
// 				<ParallaxBannerLayer image={img1} speed={-3} />
// 			</ParallaxBanner>
// 			<ParallaxBanner className="aspect-16-9 s-stack-3">
// 				<ParallaxBannerLayer image={img2} speed={-3} />
// 			</ParallaxBanner>
// 			<div className="align-items-end l-golden-ratio s-stack-3">
// 				<ParallaxBanner className="aspect-16-9">
// 					<ParallaxBannerLayer image={img3} speed={0} />
// 				</ParallaxBanner>
// 				<ParallaxBanner className="aspect-16-9">
// 					<ParallaxBannerLayer image={img4} speed={0} />
// 				</ParallaxBanner>
// 			</div>
// 			<p className="caption">
// 				Fun fact: in a company all hands meeting, Lady Gaga was a metaphor for
// 				how CSS stylesheets would work to interchange between styling on a
// 				landing page.
// 			</p>
// 		</ProjectBody>
// 		<Contact />
// 	</Layout>
// );

// export default ProjectBDSPage;
