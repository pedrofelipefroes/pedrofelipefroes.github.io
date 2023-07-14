import React, { useLayoutEffect, useRef, useState } from "react";

import c from "classnames";
import PropTypes from "prop-types";

const Header = () => {
	const header = useRef(null);
	const menu = useRef(null);

	const [expanded, setExpanded] = useState(false);
	const [scrollPosition, setScrollPosition] = useState();

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const onScroll = () => {
		let headerTopPosition = header.current.getBoundingClientRect().top;

		if (headerTopPosition === 0)
			menu.current.classList.add("toggle--is-visible");
		else menu.current.classList.remove("toggle--is-visible");
	};

	const toggleMenu = () => {
		document.querySelector("body").style.overflow = "revert";

		menu.current.classList.add("toggle--is-visible");

		setExpanded(!expanded);

		if (scrollPosition === undefined) {
			window.scrollY = scrollPosition;
		}

		if (!expanded) {
			document.querySelector("body").style.overflow = "hidden";
			setScrollPosition(window.scrollY);
		}
	};

	useLayoutEffect(() => {
		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			ref={header}
			className={c("header sans-serif txt-dark-primary", {
				["is-expanded"]: expanded,
			})}
		>
			<nav className="top-navbar">
				<p onClick={goToTop}>
					<a href="/">Froes {"\u00B7"} Designs</a>
				</p>

				<svg
					ref={menu}
					className={c("toggle", {
						["toggle--off"]: expanded,
					})}
					onClick={toggleMenu}
					width="2.5ex"
					height="2.5ex"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<line x1="0" y1="12" x2="30" y2="12" />
					<line x1="0" y1="18" x2="30" y2="18" />
				</svg>
			</nav>
			<menu className={c("menu", { ["menu--is-visible"]: expanded })}>
				<p>teste</p>
			</menu>
			<address
				className={c("contact-info", {
					["contact-info--is-visible"]: expanded,
				})}
			>
				<p>
					<a href="mailto:hello@froes.design">
						Email{"\u2009"}
						{"\u2197"}
					</a>
					<a href="https://linkedin.com/in/froesdesign">
						LinkedIn{"\u2009"}
						{"\u2197"}
					</a>
				</p>
				<p>São Paulo, 2023</p>
			</address>
		</header>
	);
};

export default Header;
