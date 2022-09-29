import React, { useEffect, useState } from "react";
import c from "classnames";

import { AnchorLink } from "gatsby-plugin-anchor-links";
import NavigationLink from "../navigation-link/navigation-link";
import Signature from "../../images/signature.inline.svg";

import {
	nav,
	body,
	footer,
	header,
	icon,
	isExpanded,
	isVisible,
} from "./nav.module.css";

const Nav = () => {
	const [expanded, setExpanded] = useState(false);
	const [scrolled, setScrolled] = useState(null);
	const [visible, setVisible] = useState(true);

	const handleClick = () => {
		setExpanded(!expanded);
		document.querySelector("body").style.overflow = "revert";

		if (!expanded) {
			document.querySelector("body").style.overflow = "hidden";
		}
	};

	const menuIcon = (
		<svg
			className={c(icon, "icon d-none--768 js-interactable-link", {
				[isExpanded]: expanded,
			})}
			onClick={handleClick}
			width="30"
			height="30"
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line x1="5" y1="12.5" x2="25" y2="12.5" />
			<line x1="5" y1="16.5" x2="25" y2="16.5" />
		</svg>
	);

	const menuLinks = [
		{ label: "Work", url: "/#work" },
		{ label: "About", url: "/#about" },
		{ label: "Contact", url: "/#contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			const previousScrollPos = scrolled;
			const currentScrollPos = window.pageYOffset;

			setVisible(previousScrollPos > currentScrollPos || currentScrollPos <= 0);
			setScrolled(currentScrollPos);
		};

		setScrolled(window.pageYOffset);

		document.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, [scrolled]);

	return (
		<nav
			className={c(
				nav,
				{ ["h-100"]: expanded, [isExpanded]: expanded, [isVisible]: visible },
				"l-overflow-hidden l-stack p-fixed u-border-box w-100 w-max-container"
			)}
		>
			<div
				className={c(
					header,
					"d-flex p-relative s-inset-inline u-align-items-center u-border-box u-divider u-justify-content-space-between w-100",
					{
						[isExpanded]: expanded,
					}
				)}
			>
				<NavigationLink to="/">Froes.design</NavigationLink>
				{menuIcon}
				<ul className="d-none d-flex--768">
					{menuLinks.map((link, index) => (
						<li
							key={link.url}
							className={index === menuLinks.length - 1 ? "" : "s-inline-3"}
						>
							<NavigationLink to={link.url}>{link.label}</NavigationLink>
						</li>
					))}
				</ul>
			</div>
			<div
				className={c(
					body,
					{ [isExpanded]: expanded },
					"d-none--768 l-stack p-fixed w-100"
				)}
			>
				{menuLinks.map((link) => (
					<div
						key={link.label}
						className="d-flex p-fixed s-inset-inline u-align-items-center u-border-box u-divider u-justify-content-center w-100"
					>
						<AnchorLink to={link.url} className="txt-ms-3">
							<span onClick={handleClick}>{link.label}</span>
						</AnchorLink>
					</div>
				))}
			</div>
			<div
				className={c(
					footer,
					"d-flex d-none--768 p-fixed s-inset-inline u-align-items-center u-border-box u-divider u-justify-content-space-between w-100",
					{
						[isExpanded]: expanded,
					}
				)}
			>
				<p className="body">São Paulo, 2022.</p>
				<Signature />
			</div>
		</nav>
	);
};

export default Nav;
