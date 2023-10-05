import React, { useLayoutEffect, useRef, useState } from "react";

import c from "classnames";
import PropTypes from "prop-types";

const Header = ({ projects }) => {
	const header = useRef(null);
	const menu = useRef(null);
	const wordmark = useRef(null);

	const [expanded, setExpanded] = useState(false);
	const [scrollPosition, setScrollPosition] = useState();

	// const goToTop = () => {
	// 	window.scrollTo({
	// 		top: 0,
	// 		behavior: "smooth",
	// 	});
	// };

	const onScroll = () => {
		let headerTopPosition = header.current.getBoundingClientRect().top;

		if (headerTopPosition === 0) {
			menu.current.classList.add("toggle--is-visible");
			wordmark.current.classList.add("wordmark--is-shifted");
		} else {
			menu.current.classList.remove("toggle--is-visible");
			wordmark.current.classList.remove("wordmark--is-shifted");
		}
	};

	const toggleMenu = () => {
		let headerTopPosition = header.current.getBoundingClientRect().top;

		if (headerTopPosition === 0) {
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
		} else {
			return;
		}
	};

	useLayoutEffect(() => {
		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			ref={header}
			className={c("header", {
				"is-expanded": expanded,
			})}
		>
			<nav
				className={c("top-navbar", {
					"top-navbar--toggle-is-visible": expanded,
				})}
			>
				<small ref={wordmark}>Froes {"\u00B7"} Design</small>

				<svg
					ref={menu}
					className={c("toggle", {
						"toggle--off": expanded,
					})}
					onClick={toggleMenu}
					width="2.5ex"
					height="2.5ex"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<line x1="2" y1="15" x2="28" y2="15" />
					<line x1="15" y1="2" x2="15" y2="28" />
				</svg>
			</nav>
			<menu className={c("menu", { "menu--is-visible": expanded })}>
				<ol>
					{projects.map((item, index) => {
						return (
							<li>
								<a href={item.id}>{item.name}</a>
							</li>
						);
					})}
				</ol>
			</menu>
			<address
				className={c("contact-info", {
					"contact-info--is-visible": expanded,
				})}
			>
				<small>
					<a href="https://linkedin.com/in/froesdesign">
						LinkedIn{"\u2009"}
						{"\u2197"}
					</a>
					<a href="mailto:hello@froes.design">
						hello@froes.design{"\u2009"}
						{"\u2197"}
					</a>
				</small>
				<small>
					<span>São Paulo,{"\u00A0"}</span>2023
				</small>
			</address>
		</header>
	);
};

Header.defaultProps = {
	projects: [],
};

Header.propTypes = {
	projects: PropTypes.array.isRequired,
};

export default Header;
