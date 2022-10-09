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
// 	<Layout hasOverflow>
// 		<Seo title={getProject("bds").title} />
// 		<ProjectBody data={getProject("bds")}>
// 			<div className="sp-block-end-lg txt-1to3-col">
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
