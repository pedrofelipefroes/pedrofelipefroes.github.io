import React from "react";
import c from "classnames";

import { Parallax } from "react-scroll-parallax";
import SectionTitle from "../section-title/section-title";
import NavigationLink from "../navigation-link/navigation-link";

import {
	contact,
	container,
	headline,
	links,
	title,
} from "./contact.module.css";

const Contact = () => {
	const splitWord = (word, phrase) => {
		return word.split("").map((i) => {
			return (
				<Parallax
					key={"word-" + word.indexOf(i)}
					easing="easeOutQuad"
					shouldAlwaysCompleteAnimation
					translateX={[-20 * phrase.length + 10 * word.indexOf(i), 0]}
				>
					<span>{i}</span>
				</Parallax>
			);
		});
	};

	const headlineCopy = "Reach Out";
	const headlineStart = headlineCopy.split(" ")[0];
	const headlineEnd = headlineCopy.split(" ")[1];

	const headlineParallax = (
		<h3 className={c(headline, "d-flex--506 text-ms-4")}>
			<div className="d-flex s-inline-2--506">
				{splitWord(headlineStart, headlineCopy)}
			</div>
			<div className="d-flex u-justify-content-end">
				{splitWord(headlineEnd, headlineCopy)}
			</div>
		</h3>
	);

	return (
		<section
			id="contact"
			className={c(
				contact,
				"s-inset-inline s-inset-stack-7 s-inset-stack-10--768 u-divider"
			)}
		>
			<SectionTitle label="Contact" className={c(title, "p-absolute")} />
			<div
				className={c(
					container,
					"d-flex--506 l-golden-ratio u-align-items-center"
				)}
			>
				{headlineParallax}
				<div className={links}>
					<Parallax
						easing="easeOutQuad"
						shouldAlwaysCompleteAnimation
						translateY={[50, 0]}
					>
						<NavigationLink
							className="sp-block-end-xs"
							to="mailto:hello@froes.design"
						>
							hello@froes.design
						</NavigationLink>
					</Parallax>
					<Parallax
						easing="easeOutQuad"
						shouldAlwaysCompleteAnimation
						translateY={[81, 0]}
					>
						<NavigationLink
							className="sp-block-end-xs"
							to="https://www.linkedin.com/in/froesdesign/"
						>
							LinkedIn/froesdesign
						</NavigationLink>
					</Parallax>
					<Parallax
						easing="easeOutQuad"
						shouldAlwaysCompleteAnimation
						translateY={[213, 0]}
					>
						<NavigationLink to="https://www.instagram.com/pedrofelipefroes/">
							@pedrofelipefroes
						</NavigationLink>
					</Parallax>
				</div>
			</div>
		</section>
	);
};

export default Contact;
