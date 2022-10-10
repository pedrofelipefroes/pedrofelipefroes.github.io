import React, { useEffect } from "react";
import c from "classnames";
import PropTypes from "prop-types";

import { ParallaxProvider } from "react-scroll-parallax";
import Nav from "../nav/nav";
import Footer from "../footer/footer";
import Cursor from "../cursor/cursor";

import { layout } from "./layout.module.css";

const ScrollReveal =
	typeof window !== `undefined` ? require("scrollreveal") : null;

const Layout = ({ children }) => {
	useEffect(() => {
		ScrollReveal.default().reveal(".artwork-piece", {
			delay: 400,
			reset: true,
		});
	});

	return (
		<ParallaxProvider>
			<Nav />
			<main className={c(layout, "s-inline-auto u-border-box w-max-container")}>
				{children}
			</main>
			<Footer />
			<Cursor />
		</ParallaxProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
