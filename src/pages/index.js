import * as React from "react";
import c from "classnames";

import Layout from "../components/layout/layout";
import Seo from "../components/seo/seo";
import NavigationLink from "../components/navigation-link/navigation-link";
import SectionTitle from "../components/section-title/section-title";
import ProjectSection from "../components/project-section/project-section";
import { StaticImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";

import {
	aboutContainer,
	artwork,
	artworkContainer,
	artworkInfo,
	artworkSectionTitle,
	header,
	innerGrid,
	lowerGrid,
	profile,
	projects,
	sideGrid,
	sideGridLeft,
	sideGridRight,
} from "./index.module.css";

import { getAllProjects } from "../../project-data";

import greeting from "../images/greeting.mp4";

const IndexPage = () => {
	const projectData = () => {
		let projects = getAllProjects();

		if (projects.length > 0) {
			return projects.map((project) => (
				<ProjectSection
					key={project.title}
					subhead={project.subhead}
					tags={project.tags}
					title={project.title}
					url={project.url}
				/>
			));
		} else {
			return (
				<div className="section s-inset-inline s-inset-stack-10">
					<h3 className="large-title txt-serif">
						Comming
						<br />
						Soon
					</h3>
				</div>
			);
		}
	};

	const handleGreeting = () => {
		if (window !== "undefined") {
			let video = document.getElementById("greeting");
			video.play();
		}
	};

	return (
		<Layout>
			<Seo title=" " />
			<header
				className={c(
					header,
					"section l-stack s-inline-auto s-inset-inline s-stack-10 s-stack-26--768 w-max-content"
				)}
			>
				<h1 className="headline s-stack-2 txt-sans-serif">
					Froes is a designer and engineer
					<br className="d-none d-initial--506" /> with a knack for
					systematic&nbsp;design.
				</h1>
				<div className="d-none--768">
					<NavigationLink to="/#artwork" className="d-none--768 s-stack-2">
						Artwork
					</NavigationLink>
					<br />
					<NavigationLink to="/#about" className="d-none--768">
						About
					</NavigationLink>
				</div>
				<div className="d-none d-flex--768">
					<NavigationLink
						to="mailto:hello@froes.design"
						className="d-flex--768 s-inline-4"
					>
						hello@froes.design
					</NavigationLink>
					<br />
					<NavigationLink
						to="https://www.linkedin.com/in/froesdesign/"
						className="d-flex--768"
					>
						LinkedIn/froesdesign
					</NavigationLink>
				</div>
			</header>
			<section
				id="projects"
				className={c(projects, "section p-relative u-divider")}
			>
				<SectionTitle
					label={"Projects"}
					className="s-inset-inline s-stack-2 w-max-content"
				/>
				{projectData()}
			</section>
			<Parallax
				speed={-50}
				id="artwork"
				className={c(artwork, "section s-stack-26")}
			>
				<div
					className={c(
						artworkContainer,
						"s-inline-auto u-align-items-end--1366 w-max-content"
					)}
				>
					<div className="u-align-self-end--768">
						<Parallax
							scale={[1.5, 1]}
							className={c(
								artworkSectionTitle,
								"d-flex s-inline-auto s-stack-3 u-align-items-center u-justify-content-center"
							)}
						/>
						<SectionTitle
							label={"Artwork"}
							className="p-relative txt-align-center"
						/>
						<figure className="artwork-piece">
							<StaticImage
								alt="Pencil drawing featuring model Aline Weber holding a cigar."
								aspectRatio={16 / 9}
								layout="fullWidth"
								src={"../images/artwork/1.jpg"}
							/>
						</figure>
					</div>
					<figure className="s-inline-10 s-inline-0--1366">
						<StaticImage
							alt="Poster inspired by Lana Del Rey's song 'Cherry' with its song title filled with a pink and orange-ish artwork of singer Lana Del Rey in the background."
							aspectRatio={3 / 4}
							layout="fullWidth"
							src={"../images/artwork/2.jpg"}
						/>
					</figure>
					<figure className="artwork-piece">
						<StaticImage
							alt="Poster inspired by Frank Ocean's song 'Sweet Life' with multi-colored popsicles shaping the song title against a black background."
							aspectRatio={3 / 4}
							layout="fullWidth"
							src={"../images/artwork/3.jpg"}
						/>
					</figure>
					<div
						className={c(
							innerGrid,
							"u-align-items-end u-align-items-start--768"
						)}
					>
						<div className="u-align-items-end">
							<figure className="artwork-piece">
								<StaticImage
									alt="Colored drawing of Kurt Cobain holding a cigar."
									aspectRatio={1 / 1}
									layout="fullWidth"
									src={"../images/artwork/5.jpg"}
								/>
							</figure>
							<figure className="u-align-self-end--768">
								<StaticImage
									alt="Poster inspired by Weyes Blood's song 'Andromeda' with a man falling into a yellow-ish capital 'a' against a sea green background."
									aspectRatio={3 / 4}
									layout="fullWidth"
									src={"../images/artwork/4.jpg"}
								/>
							</figure>
						</div>
						<figure className="s-inline-4--768 s-inline-0--1366">
							<StaticImage
								alt="Slide created for Postclick with big words 'design and development' in white against a sea green background."
								aspectRatio={16 / 9}
								layout="fullWidth"
								src={"../images/artwork/6.jpg"}
							/>
						</figure>
					</div>
					<div
						className={c(
							sideGrid,
							sideGridRight,
							"u-align-self-start--768  u-align-self-end--1366 u-align-items-end--1366"
						)}
					>
						<figure className="s-inline-10 s-inline-0--768">
							<StaticImage
								alt="Poster inspired by Madonna's song 'Vogue' with serif lyrics of the song against a digital painting of the singer in light pink and golden tones."
								aspectRatio={3 / 4}
								layout="fullWidth"
								src={"../images/artwork/7.jpg"}
							/>
						</figure>
						<figure className="d-none--768 d-initial--1366">
							<StaticImage
								alt="Poster inspired by Robyn's song 'Call Your Girlfriend' with three repeated artworks featuring sans-serif words with the song lyrics in pastel tones."
								aspectRatio={16 / 9}
								layout="fullWidth"
								src={"../images/artwork/8.jpg"}
							/>
						</figure>
					</div>
					<div
						className={c(
							lowerGrid,
							"d-none d-initial--1366 u-align-self-start--1366"
						)}
					>
						<div className={c(sideGrid, sideGridLeft)}>
							<figure className="artwork-piece">
								<StaticImage
									alt="Slide with big words 'tips to improve your work from home experience' decorated with emojis on a black background."
									aspectRatio={16 / 9}
									layout="fullWidth"
									src={"../images/artwork/9.jpg"}
								/>
							</figure>
							<figure className="artwork-piece">
								<StaticImage
									alt="Photo with a woman holding her hair in a sporty outfit against a white background."
									aspectRatio={1 / 1}
									layout="fullWidth"
									src={"../images/artwork/10.jpg"}
								/>
							</figure>
						</div>
						<figure className="artwork-piece">
							<StaticImage
								alt="Poster inspired by Lana Del Rey's song 'Get Free' with 3D blue text with the words 'into the blue' decorated with reddish lines against a yellow background."
								aspectRatio={4 / 3}
								layout="fullWidth"
								src={"../images/artwork/11.jpg"}
							/>
						</figure>
						<figure className="artwork-piece">
							<StaticImage
								alt="Poster inspired by Duda Beat's song 'Meu Pisêro' with its lyrics featured in white-colored words overlapping each other against a black background."
								aspectRatio={3 / 4}
								layout="fullWidth"
								src={"../images/artwork/12.jpg"}
							/>
						</figure>
						<figure className="s-inline-2--1366">
							<StaticImage
								alt="Grayscale photo with a woman wearing a fashionable outfit against a plain background."
								aspectRatio={1 / 1}
								layout="fullWidth"
								src={"../images/artwork/13.jpg"}
							/>
						</figure>
					</div>
					<div
						className={c(
							artworkInfo,
							"s-inset-stack-3 u-align-self-start--768"
						)}
					>
						<p className="caption s-stack-1 txt-sans-serif">
							These are products of freelancing and&nbsp;hobby.
						</p>
						<p className="caption s-stack-1 txt-sans-serif">
							I've always been fond of the idea of navigating multiple creative
							&nbsp;disciplines.
						</p>
						<p className="caption s-stack-1 txt-sans-serif">
							Drawing, photo editing, slide decks, and poster design are some
							paths I've gone&nbsp;through.
						</p>
						<p className="caption txt-sans-serif">More coming&nbsp;soon.</p>
					</div>
				</div>
			</Parallax>
			<section
				id="about"
				className="section l-overflow-visible s-inline-auto s-inset-inline w-max-content"
			>
				<SectionTitle label={"About"} className="s-stack-4" />
				<div className={c(aboutContainer, "l-stack s-stack-4")}>
					<h3 className="title-1 s-inline-3--768 s-stack-2 s-stack-0--768 txt-serif txt-uppercase">
						Now
					</h3>
					<div>
						<p className="body body--sparse d-inline txt-sans-serif">
							Head of Design Systems at Postclick. Former Design Lead at Avenue
							Code. Designer and computer engineer with over six years of
							experience who really (really) enjoys working at the intersection
							between creativity and analytical&nbsp;thinking.
						</p>
					</div>
				</div>
				<div className={c(aboutContainer, "l-stack s-stack-4")}>
					<h3 className="title-1 s-stack-2 s-stack-0--768 txt-align-right txt-serif txt-uppercase">
						Skills
					</h3>
					<div>
						<p className="body body--sparse d-inline s-inline-3--768 txt-sans-serif">
							I take a systematic approach to design: I'm comfortable dealing
							with design systems, developing in{" "}
							<span className="txt-smcps">HTML</span>,{" "}
							<span className="txt-smcps">CSS</span>, and JavaScript, crafting
							typography scales, and finding patterns
							everywhere&thinsp;&mdash;&thinsp;both in design and&nbsp;code.
						</p>
					</div>
				</div>
				<div className={c(aboutContainer, "l-stack s-stack-4")}>
					<h3 className="title-1 s-inline-3--768 s-stack-2 s-stack-0--992 u-flex-grow-1 txt-align-right txt-serif txt-uppercase">
						Contact
					</h3>
					<ul className="l-stack txt-align-right u-justify-content-space-between">
						<li className="s-stack-1 s-stack-0--768">
							<Parallax
								easing="easeOutQuad"
								shouldAlwaysCompleteAnimation
								translateY={[50, 0]}
							>
								<NavigationLink to="mailto:hello@froes.design">
									hello@froes.design
								</NavigationLink>
							</Parallax>
						</li>
						<li className="s-stack-1 s-stack-0--768">
							<Parallax
								easing="easeOutQuad"
								shouldAlwaysCompleteAnimation
								translateY={[81, 0]}
							>
								<NavigationLink to="https://www.linkedin.com/in/froesdesign/">
									LinkedIn/froesdesign
								</NavigationLink>
							</Parallax>
						</li>
						<li>
							<Parallax
								easing="easeOutQuad"
								shouldAlwaysCompleteAnimation
								translateY={[131, 0]}
							>
								<NavigationLink to="https://www.instagram.com/pedrofelipefroes/">
									@pedrofelipefroes
								</NavigationLink>
							</Parallax>
						</li>
					</ul>
				</div>
				<div className={profile}>
					<figure className="p-relative">
						<Parallax
							className="media"
							easing={"easeOutBack"}
							translateY={[100, 0]}
							rotateZ={[-25, -4.5]}
							onEnter={handleGreeting}
						>
							<StaticImage
								alt="Picture of Froes holding a white-framed glass"
								aspectRatio={3 / 4}
								height={450}
								className="media"
								src={"../images/about.jpg"}
							/>
						</Parallax>
					</figure>
					<video id="greeting" className="p-absolute w-100" muted>
						<source src={greeting} type="video/mp4" />
					</video>
				</div>
			</section>
		</Layout>
	);
};

export default IndexPage;
