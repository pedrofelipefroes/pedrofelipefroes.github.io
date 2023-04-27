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
	home,
	icon,
	isExpanded,
} from "./nav.module.css";

const Nav = () => {
	const [expanded, setExpanded] = useState(false);

	const handleClick = () => {
		setExpanded(!expanded);
		document.querySelector("body").style.overflow = "revert";

		if (!expanded) {
			document.querySelector("body").style.overflow = "hidden";
		}
	};

	const menuIcon = (
		<svg
			className={c(icon, "icon js-link", {
				[isExpanded]: expanded,
			})}
			onClick={handleClick}
			width="60"
			height="30"
			viewBox="0 0 60 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line x1="5" y1="10" x2="55" y2="10" />
			<line x1="5" y1="19" x2="55" y2="19" />
		</svg>
	);

	const menuLinks = [
		{ label: "Projects", url: "/#projects" },
		{ label: "Artwork", url: "/#artwork" },
		{ label: "About", url: "/#about" },
	];

	return (
		<nav
			className={c(
				nav,
				{
					["h-100"]: expanded,
					[isExpanded]: expanded,
				},
				"l-overflow-hidden l-stack p-fixed u-border-box w-100 w-max-container"
			)}
		>
			<div
				className={c(
					header,
					"d-flex p-relative s-inline-auto s-inset-inline u-align-items-center u-border-box u-justify-content-space-between w-100 w-max-content",
					{
						[isExpanded]: expanded,
					}
				)}
			>
				<NavigationLink className={home} to="/">
					Froes·
					<br />
					design
				</NavigationLink>
				{menuIcon}
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
						<AnchorLink to={link.url} className="title-3">
							<span onClick={handleClick}>{link.label}</span>
						</AnchorLink>
					</div>
				))}
			</div>
			<div
				className={c(
					footer,
					"d-flex d-none--768 p-fixed s-inset-inline txt-sans-serif u-align-items-center u-border-box u-divider u-justify-content-space-between w-100",
					{
						[isExpanded]: expanded,
					}
				)}
			>
				<p className="caption txt-sans-serif">São Paulo Brazil</p>
				<p className="caption txt-sans-serif">Froes © 2022</p>
				<Signature />
			</div>
		</nav>
	);
};

export default Nav;
