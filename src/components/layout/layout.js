import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";

import { ParallaxProvider } from "react-scroll-parallax";
import Nav from "../nav/nav";
import Footer from "../footer/footer";
import Cursor from "../cursor/cursor";

import "animate.css/animate.min.css";
import { layout } from "./layout.module.css";

const Layout = ({ children }) => (
	<ParallaxProvider>
		<Nav />
		<main className={c(layout, "s-inline-auto u-border-box w-max-container")}>
			{children}
		</main>
		<Footer />
		<Cursor />
	</ParallaxProvider>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
