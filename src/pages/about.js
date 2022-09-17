import * as React from "react";
import c from "classnames";
import { Parallax } from "react-scroll-parallax";

import Layout from "../components/layout/layout";
import Seo from "../components/seo/seo";
import ExperienceCard from "../components/experience-card/experience-card";
import Contact from "../components/contact/contact";

import { about } from "./about.module.css";

const AboutPage = () => (
	<Layout>
		<Seo title="About" />
		<section
			id="about"
			className={c(
				about,
				"align-items-start divider grid-golden-ratio grid-golden-ratio--reverse sp-inset-inline sp-inset-block-end-md"
			)}
		>
			<div>
				<Parallax speed={2.5}>
					<h2 className="sp-block-end-xs text-ms-3">
						Skillset &amp; Experi&shy;ence
					</h2>
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
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</ExperienceCard>
				<ExperienceCard role="Design Lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</ExperienceCard>
				<ExperienceCard role="Marketing Designer">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</ExperienceCard>
				<ExperienceCard role="Product Designer">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</ExperienceCard>
				<ExperienceCard role="UI Engineer">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</ExperienceCard>
			</div>
		</section>
		<Contact />
	</Layout>
);

export default AboutPage;
