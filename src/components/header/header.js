import React, { useLayoutEffect, useRef, useState } from "react";

import { useScrollDirection } from "react-use-scroll-direction";
import c from "classnames";
import PropTypes from "prop-types";

const Header = ({ projects }) => {
	const header = useRef(null);
	const landscapeMenu = useRef(null);
	const menu = useRef(null);
	const mode = useRef(null);
	const wordmark = useRef(null);

	const { isScrollingDown, isScrollingUp } = useScrollDirection();
	const [atPageTop, setAtPageTop] = useState(true);
	const [expanded, setExpanded] = useState(false);
	const [visible, setVisible] = useState(true);
	const [scrollPosition, setScrollPosition] = useState();

	// const goToTop = () => {
	// 	window.scrollTo({
	// 		top: 0,
	// 		behavior: "smooth",
	// 	});
	// };

	const toggleMenu = () => {
		let headerTopPosition = header.current.getBoundingClientRect().top;

		if (headerTopPosition === 0) {
			document.querySelector("body").style.overflow = "revert";
			setExpanded(!expanded);
			menu.current.classList.add("toggle--is-visible");

			if (scrollPosition === undefined) {
				window.scrollY = scrollPosition;
			}

			if (expanded) {
			}

			if (!expanded) {
				document.querySelector("body").style.overflow = "hidden";
				setScrollPosition(window.scrollY);
				setAtPageTop(true);
				setVisible(true);
			}
		} else {
			return;
		}
	};

	useLayoutEffect(() => {
		const onScroll = () => {
			let headerTopPosition = header.current.getBoundingClientRect().top;

			if (headerTopPosition === 0) {
				menu.current.classList.add("toggle--is-visible");
				wordmark.current.classList.add("wordmark--is-shifted");
				landscapeMenu.current.classList.add("landscape-menu--is-collapsed");
			} else {
				menu.current.classList.remove("toggle--is-visible");
				wordmark.current.classList.remove("wordmark--is-shifted");
				landscapeMenu.current.classList.remove("landscape-menu--is-collapsed");
			}

			if (isScrollingUp && "UP") {
				setVisible(true);
				window.scrollY === 0 ? setAtPageTop(true) : setAtPageTop(false);
			} else if (isScrollingDown && "DOWN") {
				setVisible(false);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [isScrollingDown, isScrollingUp]);

	return (
		<>
			<div
				className={c("mode", {
					"mode--is-visible": visible,
				})}
				ref={mode}
			>
				<small
					className={c("mode--is-selected", {
						"mode--at-page-top": atPageTop,
					})}
				>
					Light
				</small>
				<small
					className={c({
						"mode--at-page-top": atPageTop,
					})}
				>
					Dark
				</small>
			</div>
			<header
				ref={header}
				className={c("header", {
					"header--is-expanded": expanded,
				})}
			>
				<nav className="top-navbar">
					<menu ref={landscapeMenu}>
						<ol>
							{projects.map((item, i) => {
								return (
									<li key={i}>
										<a href={item.id}>{item.name}</a>
									</li>
								);
							})}
						</ol>
					</menu>

					<small ref={wordmark} className="wordmark">
						Froes {"\u00B7"} Design
					</small>

					<svg
						ref={menu}
						className={c("toggle", {
							"toggle--off": expanded,
							"toggle-is-visible": expanded,
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
						{projects.map((item, i) => {
							return (
								<li key={i}>
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
		</>
	);
};

Header.defaultProps = {
	projects: [],
};

Header.propTypes = {
	projects: PropTypes.array.isRequired,
};

export default Header;
