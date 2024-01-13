import React, { useEffect, useRef, useState } from "react";

import c from "classnames";
import PropTypes from "prop-types";

const Header = ({ projects }) => {
	const header = useRef(null);
	const title = useRef(null);

	const [expanded, setExpanded] = useState(false);
	const [wordmark, setWorkmark] = useState(true);

	const handleScroll = () => {
		const titlePosition = title.current.getBoundingClientRect().bottom;
		let projectCoverPositions =
			document.getElementsByClassName("project-cover");

		for (let project of projectCoverPositions) {
			if (
				titlePosition >= project.getBoundingClientRect().top &&
				titlePosition <= project.getBoundingClientRect().bottom
			) {
				title.current.classList.remove("title--is-wordmark");
				return;
			} else {
				title.current.classList.add("title--is-wordmark");
			}
		}
	};

	const toggleMenu = () => {
		let headerTopPosition = header.current.getBoundingClientRect().top;

		if (headerTopPosition === 0) {
			document.querySelector("body").style.overflow = "revert";
			setExpanded(!expanded);

			if (!expanded) {
				document.querySelector("body").style.overflow = "hidden";
			}
		} else {
			return;
		}
	};

	useEffect(() => {
		handleScroll();
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<header
				ref={header}
				className={c("viewport--max-width header", {
					"header--is-expanded": expanded,
				})}
			>
				<nav className="top-navbar">
					<div ref={title} className="title title--is-wordmark">
						<h1>
							<span className="froes">Froes</span>
							<br />
							<span className="design">Design</span>
							<span className="s">
								<span>s</span>
							</span>
						</h1>
					</div>
					<svg
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
						<line x1="5" y1="15" x2="25" y2="15" />
						<line x1="15" y1="5" x2="15" y2="25" />
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
							Email{"\u2009"}
							{"\u2197"}
						</a>
					</small>
					<small>
						<span>São Paulo,{"\u00A0"}</span>2024
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
