import React from "react";
import c from "classnames";
import { Parallax } from "react-scroll-parallax";

import SectionTitle from "../section-title/section-title";
import NavigationLink from "../navigation-link/navigation-link";

import { contact, container, headline } from "./contact.module.css";

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
		<>
			<div className={headline}>{splitWord(headlineStart, headlineCopy)}</div>
			<div className={headline}>{splitWord(headlineEnd, headlineCopy)}</div>
		</>
	);

	return (
		<section id={contact}>
			<SectionTitle label="Contact" spStart="md" />
			<div
				className={c(
					container,
					"align-items-end divider grid-golden-ratio sp-inset-inline sp-inset-block-end-md"
				)}
			>
				<h3 className="sp-inset-block-start-xs text-ms-4">
					{headlineParallax}
				</h3>
				<div className="sp-inline-end-xs">
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
						translateY={[75, 0]}
					>
						<NavigationLink
							className="sp-block-end-xs"
							to="https://www.linkedin.com/in/froesdesign/"
						>
							in/froesdesign
						</NavigationLink>
					</Parallax>
					{/* <Parallax easing="easeOutQuad" shouldAlwaysCompleteAnimation translateY={[80, 0]}>
                    <NavigationLink classNames={"spacing-stack-sm"} to="https://www.instagram.com/pedrofelipefroes/">Working Not Working</NavigationLink>
                </Parallax> */}
					<Parallax
						easing="easeOutQuad"
						shouldAlwaysCompleteAnimation
						translateY={[125, 0]}
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
