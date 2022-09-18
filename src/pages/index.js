import React, { useState } from "react";
import c from "classnames";
import { Parallax } from "react-scroll-parallax";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import Seo from "../components/seo/seo";
import ExperienceCard from "../components/experience-card/experience-card";
import SectionTitle from "../components/section-title/section-title";
import SelectedWork from "../components/selected-work/selected-work";
import NavigationLink from "../components/navigation-link/navigation-link";
import Button from "../components/button/button";
import Contact from "../components/contact/contact";

import {
	about,
	btnGroup,
	exp,
	expIsExpanded,
	header,
	summary,
	summaryIsHidden,
	work,
} from "./index.module.css";

import coverBDS from "../images/selected-work/bds/cover.jpg";
import coverPDS from "../images/selected-work/pds/cover.jpg";
import coverACR from "../images/selected-work/acr/cover.jpg";
import coverSEP from "../images/selected-work/sep/cover.jpg";

const IndexPage = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleClick = () => {
		setIsExpanded(!isExpanded);
	};

	const selectedWorkData = [
		{
			title: "Postclick Block Design System",
			url: "/about",
			img: coverBDS,
			rotation: {
				z: [-5, 5],
			},
			tags: ["Design System", "Front-end", "Marketing Design"],
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			title: "Rebranding Postclick Design System",
			url: "/about",
			img: coverPDS,
			rotation: {
				z: [-8, 2],
			},
			tags: ["Design System"],
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			title: "Rebranding Avenue Code",
			url: "/about",
			img: coverACR,
			rotation: {
				z: [-7, 2],
			},
			tags: ["Branding", "Marketing Design"],
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			title: "Responsive Design at Sephora",
			url: "/about",
			img: coverSEP,
			rotation: {
				z: [7, -2],
			},
			tags: ["Front-end", "UX Research"],
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
	];

	const selectedWork = selectedWorkData.map((e) => {
		return (
			<SelectedWork
				key={e.title}
				description={e.description}
				img={e.img}
				rotation={e.rotation}
				tags={e.tags}
				title={e.title}
				url={e.url}
			/>
		);
	});

	return (
		<Layout>
			<Seo title=" " />
			<header
				className={c(
					header,
					"align-items-end grid-golden-ratio sp-inset-inline sp-block-end-lg"
				)}
			>
				<h1 className="text-ms-1">
					Froes is a designer and engineer with a knack for{" "}
					<span className="text-nowrap">systematic design.</span>
				</h1>
				<div>
					<NavigationLink
						to="/#about"
						className="is-hidden-768 sp-block-end-xs"
					>
						About
					</NavigationLink>
					<br />
					<NavigationLink to="/#contact" className="is-hidden-768">
						Contact
					</NavigationLink>
				</div>
			</header>
			<section id="work" className={c(work, "sp-inset-block-end-lg")}>
				<SectionTitle label="Selected Work" />
				{selectedWork}
			</section>
			<section id="about" className={about}>
				<SectionTitle label="About" spEnd="xs" />
				<div>
					<div
						className={c(
							summary,
							{ [summaryIsHidden]: isExpanded },
							"align-items-end grid-golden-ratio sp-inset-inline w-max-container"
						)}
					>
						<Parallax speed={-5}>
							<h3 className="text-ms-3">
								Current Head of Design Systems at Postclick. Former Design Lead
								at Avenue Code.
							</h3>
						</Parallax>
						<div className="justify-self-end text-ms-0 w-max-txt">
							<p className="sp-inset-block-end-xs">
								I'm a designer and computer engineer with over six years of
								experience who really (<em>really</em>) enjoys working in the
								intersection between creativity and{" "}
								<span className="text-nowrap">analytical thinking.</span>
							</p>
							<p>
								This means I take a systematic approach to design, being at home
								when dealing with design systems, developing in{" "}
								<span className="text-smcps">HTML</span>,{" "}
								<span className="text-smcps">CSS</span> &amp; JavaScript,
								crafting typography scales, writing documentation, and finding
								patterns everywhere&thinsp;&mdash;&thinsp;both in{" "}
								<span className="text-nowrap">design and code.</span>
							</p>
						</div>
						<div className={btnGroup}>
							<Parallax shouldAlwaysCompleteAnimation translateX={[50, 0]}>
								<Button>
									<Link to="/about">More Info</Link>
								</Button>
							</Parallax>
							<Parallax
								translateX={isExpanded ? [-50, 0] : [50, 0]}
								onClick={handleClick}
							>
								<Button>
									<span>Info</span>
								</Button>
							</Parallax>
						</div>
					</div>
					<div
						className={c(
							exp,
							{ [expIsExpanded]: isExpanded },
							"align-items-start grid-golden-ratio grid-golden-ratio--reverse sp-inset-inline w-max-container"
						)}
					>
						<div>
							<Parallax speed={2.5}>
								<h3 className="sp-block-end-xs text-ms-3">
									Skillset &amp; Experi&shy;ence
								</h3>
							</Parallax>
							<Parallax speed={5}>
								<p className="text-ms-1">
									I had the opportunity to work under different hats in Design,
									Marketing, and Product teams and deliver end-to-end solutions
									encompassing both concept and development.&nbsp;
								</p>
							</Parallax>
						</div>
						<div className="grid-3 sp-inset-block-end-md">
							<ExperienceCard role="Head of Design Systems">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</ExperienceCard>
							<ExperienceCard role="Design Lead">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</ExperienceCard>
							<ExperienceCard role="Marketing Designer">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</ExperienceCard>
							<ExperienceCard role="Product Designer">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</ExperienceCard>
							<ExperienceCard role="UI Engineer">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</ExperienceCard>
						</div>
					</div>
				</div>
			</section>
			<Contact />
		</Layout>
	);
};

export default IndexPage;
